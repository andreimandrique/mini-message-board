const pool = require("./pools");

async function getAllMessage() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(text, message) {
  await pool.query("INSERT INTO messages (text,message) VALUES ($1, $2)", [
    text,
    message,
  ]);
}

module.exports = {
  getAllMessage,
  insertMessage,
};
