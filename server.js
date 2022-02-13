const express = require("express");
const app = express();
const multer = require("multer");
const { sliceModel } = require("./slice");
require("dotenv").config();

app.use(express.urlencoded({ extended: false, limit: "50mb" }));

console.log(process.env.NODE_PATH);

const PORT = process.env.PORT || 4000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.originalname.split(".")[0]}-${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/slice", upload.single("uploaded_file"), (req, res) => {
  console.log(req.file);
  // sliceModel(req.file.filename);
  console.log(req.file.filename);

  // res.download("output.gcode");
  res.send(200);
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
