const links = require("../utils/links");
const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const validateUser = [
  body("text").trim().notEmpty().withMessage("text can not be empty"),
  body("user").trim().notEmpty().withMessage("user can not be empty"),
];

exports.messageGet = (req, res) => {
  res.render("form", { links: links });
};

exports.messagePost = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        links: links,
        errors: errors.array(),
      });
    }
    const { user, text } = req.body;
    try {
      await db.insertMessage(text, user);
      res.redirect("/");
    } catch (error) {
      res.status(500).send("Error inserting message");
    }
  },
];
