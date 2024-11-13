const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
