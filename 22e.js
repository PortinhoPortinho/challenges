const numNeightbors = Number(
  prompt("How many neighbour countries does your contry have?"),
);

if (numNeightbors === 1) {
  console.log(" Only 1 border!");
} else if (numNeightbors === 0) {
  console.log("No borders");
} else {
  console.log("more than 1");
}
