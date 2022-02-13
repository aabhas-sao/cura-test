const express = require("express");
const app = express();
const multer = require("multer");
const { sliceModel } = require("./slice");
require("dotenv").config();

app.use(express.urlencoded({ extended: false, limit: "50mb" }));

console.log(process.env.NODE_PATH);

const PORT = process.env.PORT || 4000;

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/slice", upload.single("uploaded_file"), (req, res) => {
  console.log(req.file);
  sliceModel(req.file.filename);

  res.download("output.gcode");
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
