const express = require("express");
const helmet = require("helmet");

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./data/recipebook.sqlite3"
  },
  useNullasDefault: true
};
const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());

//DISH
//GET ALL
server.get("/api/dishs", async (req, res) => {
  try {
    const dishs = await db("dishs");
    res.status(200).json(dishs);
  } catch (error) {
    res.status(500).json(error);
  }
});

//SERVER PORT
const port = process.env.PORT || 2300;
server.listen(port, () =>
  console.log("\n** Recipe Book API running on http://localhost:${port} **\n")
);
