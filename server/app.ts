import express from "express";
const app = express();
let port = 8081;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// silly eslint errors on purpose
if (port === NaN) {
  throw new Error("Port must be a number");
}

port = port;

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
