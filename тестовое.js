let words = ['banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana'];

const sortFuits = (fruits) => {
  const fruitCounts = fruits.reduce((counts, fruit) => {
    if (!counts[fruit]) {
      counts[fruit] = 1;
    } else {
      counts[fruit]++;
    }
    return counts;
  }, {});

  const uniqueFruits = Object.keys(fruitCounts);

  const sortedFruits = uniqueFruits.sort((a, b) => fruitCounts[b] - fruitCounts[a]);

  return sortedFruits;
}
const sortedFruits = sortFuits(words);
