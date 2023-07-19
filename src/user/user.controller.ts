import { Request, Response, NextFunction } from "express";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/createUser.dto";

export class UserController {
  private userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  async createUser(req: Request, res: Response) {
    const body: CreateUserDTO = req.body;
    const user = await this.userService.createUser(body);

    return res.status(201).json({
      message: "User created successfully",
      status: 200,
      data: user,
    });
  }

  async listUsers(req: Request, res: Response) {
    const users = await this.userService.listUsers();

    return res.status(200).json({
      results: users.length,
      data: users,
    });
  }
}
