const express = require("express");
const req = require("express/lib/request");
const app = express();
// console.dir(app);

let port = 8080;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.use((req, res) => {
  //   console.log(req);
  console.log("request received");
  res.send("this is a basic response");
});
