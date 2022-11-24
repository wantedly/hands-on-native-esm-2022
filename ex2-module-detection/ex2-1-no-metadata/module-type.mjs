if (typeof await /0/["test"] === "function") {
  console.log("I'm ESM");
} else if (typeof require === "function") {
  console.log("I'm CJS");
} else {
  console.log("I'm other");
}
