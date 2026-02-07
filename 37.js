function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
const myJuice = fruitProcessor(2, 3);

describePopulation = function (country, population) {
  const percentage = (population / 7900) * 100;
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};
describePopulation("Brasil", 213);
describePopulation("Portugal", 10);
describePopulation("Canada", 40);
