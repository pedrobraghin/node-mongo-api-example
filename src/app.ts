import express from "express";
import { UserController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { UserRepository } from "./user/user.repository";

const router = express.Router();
const app = express();

const userController = new UserController(
  UserService.getInstance(new UserRepository())
);

app.use(express.json());

router.post("/users", userController.createUser.bind(userController));
router.get("/users", userController.listUsers.bind(userController));

app.use("/api/v1", router);

app.all("*", (req, res) =>
  res.status(404).json({
    message: "route not found",
    status: 404,
  })
);

export default app;
