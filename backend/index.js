const app = require("./app");
const db = require("./config/db");

const port = 2626;

app.listen(port, () => {
  console.log("Server Listening on Port http://localhost:" + port);
});
