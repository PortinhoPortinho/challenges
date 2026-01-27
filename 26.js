const language = prompt("What language do you speak?");

switch (language) {
  case "mandarin":
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place number of native speakers!");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
