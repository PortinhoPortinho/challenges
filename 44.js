const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["firstName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends",
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Please choose between firstName, lastName, age, job, and friends",
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`,
);
console.log(
  jonas.firstName +
    " has " +
    jonas.friends.length +
    " friends, and his best friend is called " +
    jonas.friends[0],
);
