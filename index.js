const express = require("express");
// const req = require("express/lib/request");
const app = express();
// console.dir(app);

let port = 8080;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("you contacted Sarita root path");
});

app.get("/search", (req, res) => {
  res.send("you contacted search path");
});

app.get("/home", (req, res) => {
  res.send("you contacted home path");
});

app.get("*", (req, res) => {
  res.send("this path does not exist");
});

// app.use((req, res) => {
//   // console.log(req);
//   console.log("request received");
//   // res.send("this is a basic response");
//   // res.send({
//   //   name: "apple",
//   //   color: "red",
//   // });
//   let code = "<h1>Fruits</h1><ul><li>Apple</li><li>orange</li></ul>";
//   res.send(code);
// });
