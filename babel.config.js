module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-env"],
    plugins: [
      ["@babel/transform-runtime"],
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@config": "./src/config",
            "@controller": "./src/controller",
            "@db": "./src/db",
            "@middleware": "./src/middleware",
            "@migration": "./src/migration",
            "@models": "./src/models",
            "@routes": "./src/routes",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
