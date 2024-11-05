const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Reverend Insanity",
    user: "Gu Zhen Ren",
    added: new Date(),
  },
  {
    text: "I love reading Web Novels !",
    user: "Andrei",
    added: new Date(),
  },
];

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "Message" },
];

app.get("/", (req, res) => {
  res.render("index", {
    links: links,
    title: "Mini Messageboard",
    messages: messages,
  });
});

app.get("/new", (req, res) => {
  res.render("form", { links: links });
});

app.post("/new", (req, res) => {
  const messageText = req.body.text;
  const messageUser = req.body.user;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
