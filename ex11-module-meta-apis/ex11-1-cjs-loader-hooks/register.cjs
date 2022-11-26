const oldLoader = require.extensions[".js"];
require.extensions[".js"] = function(mod, filename) {
  const oldCompile = mod._compile;
  mod._compile = function(code, filename) {
    const newCode = `console.log(__filename);` + code;
    return oldCompile.call(this, newCode, filename);
  };
  oldLoader(mod, filename);
};
