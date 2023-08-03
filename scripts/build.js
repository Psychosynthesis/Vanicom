const { exec } = require('child_process');
const fs = require('fs');
const colors = require("./colors.js");

const isWin = process.platform === "win32";

const buildAllCom = "babel ./source --out-dir ./build --copy-files --extensions \".js,.jsx\" --source-maps false";
const minifyBuildCom = "babel ./build/prebuild.js --out-file ./build/vanicom.min.js --source-maps false";

// Есть ещё вариант указать отдельный конфиг для бабеля для запуска из консоли:
// babel --config-file /path/to/my/babel.config.json
// Тогда можно будет использовать для запуска только секцию scripts в package.json
// Но кажется это менее гибкий вариант

console.log(colors.ResetColors, " ");
console.log("Generate build...");

exec(buildAllCom, (buildAllErr, buildAllOut) => {
  if (buildAllErr) {
    console.error(colors.RedColor, buildAllErr);
    console.error(colors.ResetColors, " ");
    return;
  } else {
    const compiled = fs.readFileSync("./build/index.js", "utf8");
    const polyfills = fs.readFileSync("./build/polyfills.js", "utf8");
    const interconnect = "window.exports = window; \n";

    fs.writeFile("./build/prebuild.js", interconnect + compiled + " \n" + polyfills, function(error){
       if (error) throw error; // если возникла ошибка
       console.log(colors.GreenColor, "Prebuild compiled");
       console.log(colors.ResetColors, " ");
    });

    console.log("Generate minified build...");

    exec(minifyBuildCom,
      { env: { "BUILD_ENV": "minify", "NODE_SKIP_PLATFORM_CHECK": "1" }},
      (minifyBuildErr, minifyBuildOut) => {
        if (minifyBuildErr) {
          console.error(colors.RedColor, minifyBuildErr);
          console.error(colors.ResetColors, " ");
        } else {
          fs.unlinkSync("./build/prebuild.js");
          fs.unlinkSync("./build/polyfills.js");
          console.log(colors.GreenColor, "Build compiled");
          console.log(colors.ResetColors, " ");

        }
        console.log(minifyBuildOut);
      }
    );
  }
  console.log(buildAllOut);
});

console.log(colors.ResetColors, " ");
