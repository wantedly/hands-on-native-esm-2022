import("./sleep-lib.mjs").then(({ value }) => {
  exports.value2 = value * 2;
});
