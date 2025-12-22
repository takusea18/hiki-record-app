const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/save", (req, res) => {
  console.log(req.body);
  res.send("保存した！");
});

app.listen(3000, () => {
  console.log("http://localhost:3000 で起動中");
});
