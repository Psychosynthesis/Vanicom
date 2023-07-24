const fs = require('fs');
const path = require("path");
const colors = require("./colors.js");
const buildFolder = './build/';

console.log(colors.CyanColor, 'Start cleaning...');
console.log(colors.CyanColor, ' ');

fs.readdir(buildFolder, (err, files) => {
  let removing_error = false;
  files.forEach(file => {
    console.log(colors.MagentaColor, 'Removing......' + path.resolve(buildFolder + file));
    try {
      fs.unlinkSync(buildFolder + file);
    } catch (e) {
      console.error(colors.RedColor, 'Build folder clean failed!');
      console.log(colors.ResetColors, ' ');
      removing_error = true;
    }
  });

  if (!removing_error) {
    console.log(colors.CyanColor, 'Build folder successfuly cleaned');
    console.log(colors.CyanColor, '________________________________');
    console.log(colors.ResetColors, ' ');
  }
});
