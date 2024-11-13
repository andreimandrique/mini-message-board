require("dotenv").config();

const { Client } = require("pg");

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const SQL = `INSERT INTO messages (text, message)
VALUES ('hello world', 'andrei'),('i love programming', 'klein');`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
