const links = require("../utils/links");
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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).render("form", {
        links: links,
        errors: errors.array(),
      });
    }
    const { user, text } = req.body;
    res.redirect("/new");
  },
];
