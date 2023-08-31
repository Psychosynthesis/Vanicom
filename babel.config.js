module.exports = api => {
  // Cached based on the value of some function. If this function returns a value different from
  // a previously-encountered value, the plugins will re-evaluate.
  const isProd = api.cache(() => process.env.NODE_ENV === "production");
  const isDev = api.cache(() => process.env.NODE_ENV === "development");
  const needMinimize = api.cache(() => process.env.BUILD_ENV === "minify");
  // api.cache(false);

  const presets = [
    !needMinimize && [
			"@babel/preset-env", { // Доки preset-env: https://babeljs.io/docs/babel-preset-env
	      "bugfixes": true,
	      "exclude": [ "@babel/plugin-transform-typeof-symbol"], // Убираем баг с повторяющимся typeof
	      "targets": { "ie": "9" },
	      "modules": needMinimize ? false : "auto", // Минифицируется только уже скомпилированные файлы без поддержки модулей
	    },
		],
    needMinimize && ["minify", { "keepFnName": true }], // Настройки минификации: https://babeljs.io/docs/babel-preset-minify
  ].filter(Boolean); // this will filter any falsy plugins (such as removing react-remove-properties when not in production);

  return {
		"plugins": ["@babel/plugin-syntax-flow"],
    "presets": presets,
    "comments": !needMinimize,
    "ignore": [ "/tests" ]
  };
};
