import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WeatherService} from "../../services/weather.service";
import * as moment from "moment/moment";
import {take} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

interface IWeatherData {
  localtime: Date | null;
  name: string | null;
  avg_temperature: number | null;
  cur_temperature: string | number | null;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherForm: FormGroup;
  public weatherData: IWeatherData | null = null;
  public minDate: Date = new Date();
  public maxDate: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService,
    private snackBar: MatSnackBar,
    private cd: ChangeDetectorRef
  ) {
    this.weatherForm = this.fb.group({
      city: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.calculateDates();
  }

  onSubmit(): void {
    if (this.weatherForm.valid) {
      const {city, date} = this.weatherForm.value;
      const formattedDate = this.formatDate(date);

      this.fetchWeatherData(city, formattedDate);
    }
  }

  private formatDate(date: Date): string {
    return moment(date).format('YYYY-MM-DD');
  }

  private fetchWeatherData(city: string, formattedDate: string): void {
    this.weatherService.getWeather(city, formattedDate)
      .pipe(take(1))
      .subscribe(
        (res) => {
          // Чтобы получить погоду на текущий час, нужно достать из массива по нужному индексу
          const hour = res.location.localtime
            ? parseInt(res.location.localtime.toString().split(" ")[1].split(":")[0], 10)
            : 0;

          this.weatherData = {
            localtime: res.forecast.forecastday[0].date,
            name: res.location.name,
            avg_temperature: res.forecast.forecastday[0].day.avgtemp_c,
            cur_temperature: hour !== 0 ? res.forecast.forecastday[0].hour[hour].temp_c : '-',
          };
        },
        (error) => this.handleError(error)
      ).add(() => {
      this.cd.detectChanges()
    });
  }

  private handleError(message: any): void {
    this.snackBar.open(message.error.error.message, undefined, {duration: 3000});
  }

  /**
   * Гео сервер не умеет выдавать погоду, по датам которые больше текущей более чем на 1
   * Расчет максимальной и минимальной даты, смотрим на текущую неделю
   * */
  private calculateDates() {
    const currentDate = moment();
    const startDate = currentDate.clone().startOf('isoWeek');
    const endDate = currentDate.clone().add(1, 'day');

    this.minDate = startDate.toDate();
    this.maxDate = endDate.toDate();
  }
}
