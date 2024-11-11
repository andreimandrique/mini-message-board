const links = require("../utils/links");
const db = require("../db/queries");

exports.indexGet = async (req, res) => {
  try {
    const listOfMessage = await db.getAllMessage();
    res.render("index", {
      links: links,
      title: "Mini Messageboard",
      messages: listOfMessage,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching messages");
  }
};
