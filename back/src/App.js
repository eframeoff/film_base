const express = require("express");
const app = express();

//settings PORT
app.set("port", process.env.POST || 3001);

//midlewares
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//import route
const filmRoute = require("./routes/FilmRoute");

//route
app.use("/films", filmRoute);

app.use("/", (req, res) => {
  res.send("hello world");
});

app.listen(app.get("port"), () => {
  console.log("Started server node.js");
});
