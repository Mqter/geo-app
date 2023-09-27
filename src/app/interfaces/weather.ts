/**
 *
 * Интерфейс «Погода»
 *
 *
 * */
export interface IWeather {
  // Forecast object
  forecast: {
    forecastday: IForecastDay[]
  };
  // Location object
  location: ILocation;
}

export interface IForecastDay {
  // Astro object
  astro: IAstro;
  // Forecast date
  date: Date | null;
  // Forecast date as unix time.
  date_epoch: Date | null;
  day: IDay;
  hour: IHour[];
}

export interface IAstro {
  // Sunrise local time
  sunrise: string | null;
  // Sunset local time
  sunset: string | null;
  // Moonrise local time
  moonrise: string | null;
  // Moonset local time
  moonset: string | null;
  // Moon phases
  moon_phase: string | null;
  // Moon illumination
  moon_illumination: string | null;
}

export interface IHour {
  // Time as epoch
  time_epoch: number | null;
  // Date and time
  time: string | null;
  // Temperature in celsius
  temp_c: number | null;
  // Temperature in fahrenheit
  temp_f: number | null;
  // 1 = Yes 0 = No
  // Whether to show day condition icon or night icon
  is_day: number | null;
  condition: {
    // Weather condition text
    text: string | null;
    // Weather condition icon
    icon: string | null;
    // Weather condition code
    code: number | null;
  };
  // Maximum wind speed in miles per hour
  wind_mph: number | null;
  // Maximum wind speed in kilometer per hour
  wind_kph: number | null;
  // Wind direction in degrees
  wind_degree: number | null;
  // Wind direction as 16 point compass. e.g.: NSW
  wind_dir: string | null;
  // Pressure in millibars
  pressure_mb: number | null;
  // Pressure in inches
  pressure_in: number | null;
  // Precipitation amount in millimeters
  precip_mm: number | null;
  // Precipitation amount in inches
  precip_in: number | null;
  // Humidity as percentage
  humidity: number | null;
  // Cloud cover as percentage
  cloud: number | null;
  // Feels like temperature as celcius
  feelslike_c: number | null;
  // Feels like temperature as fahrenheit
  feelslike_f: number | null;
  // Windchill temperature in celcius
  windchill_c: number | null;
  // Windchill temperature in fahrenheit
  windchill_f: number | null;
  // Heat index in celcius
  heatindex_c: number | null;
  // Heat index in fahrenheit
  heatindex_f: number | null;
  // Dew point in celcius
  dewpoint_c: number | null;
  // Dew point in fahrenheit
  dewpoint_f: number | null;
  // 1 = Yes 0 = No
  // Will it will rain or not
  will_it_rain: number | null;
  chance_of_rain: number | null;
  // 1 = Yes 0 = No
  // Will it snow or not
  will_it_snow: number | null;
  chance_of_snow: number | null;
  // Visibility in kilometer
  vis_km: number | null;
  // Visibility in miles
  vis_miles: number | null;
  gust_mph: number | null;
  gust_kph: number | null;
  uv: number | null;
}

export interface IDay {
  // Maximum temperature in celsius for the day.
  maxtemp_c: number | null;
  // Maximum temperature in fahrenheit for the day
  maxtemp_f: number | null;
  // Minimum temperature in celsius for the day
  mintemp_c: number | null;
  // Minimum temperature in fahrenheit for the day
  mintemp_f: number | null;
  // Average temperature in celsius for the day
  avgtemp_c: number | null;
  // Average temperature in fahrenheit for the day
  avgtemp_f: number | null;
  // Maximum wind speed in miles per hour
  maxwind_mph: number | null;
  // Maximum wind speed in kilometer per hour
  maxwind_kph: number | null;
  // Total precipitation in milimeter
  totalprecip_mm: number | null;
  // Total precipitation in inches
  totalprecip_in: number | null;
  // Average visibility in kilometer
  avgvis_km: number | null;
  // Average visibility in miles
  avgvis_miles: number | null;
  // Average humidity as percentage
  avghumidity: number | null;
  condition: {
    // Weather condition text
    text: string | null;
    // Weather condition icon
    icon: string | null;
    // Weather condition code
    code: number | null;
  } | null;
  // UV Index
  uv: number | null;

}

export interface ILocation {
  // Location country
  country: string | null;
  // Latitude in decimal degree
  lat: number | null;
  // Local date and time
  localtime: Date | null;
  // Local date and time in unix time
  localtime_epoch: number | null;
  // Longitude in decimal degree
  lon: number | null;
  // Location name
  name: string | null;
  // Region or state of the location, if available
  region: string | null;
  // Time zone name
  tz_id: string | null
}
