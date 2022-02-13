const execSync = require("child_process").execSync;

const sliceModel = (
  input_file,
  printer_def = "printer-settings/ultimaker3.def.json"
) => {
  console.log("hello");
  const output = execSync(
    `CuraEngine slice -v -j ${printer_def} -o output.gcode -s infill_line_distance=0 -l ${input_file}`,
    { encoding: "utf-8" }
  ); // the default is 'buffer'

  console.log("Output was:\n", output);
};

module.exports = { sliceModel };
