const express = require("express");
const app = express();

const records = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/save", (req, res) => {
  records.push(req.body);
  console.log(req.body);
  res.send("保存した！");
});

//listenより前におく
app.get("/records",(req, res)=>{
    res.json(records);
});


app.listen(3000, () => {
  console.log("http://localhost:3000 で起動中");
});


