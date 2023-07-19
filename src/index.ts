import "dotenv/config";
import { connect } from "./database";
import app from "./app";

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log("listening on port " + port);
  await connect();
  console.log("Database connection established");
});
