import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { randomBytes } from "node:crypto";

export class UserRepository {
  private users: UserEntity[] = [];

  async createUser(user: CreateUserDTO): Promise<UserEntity> {
    const userEntity = new UserEntity();
    userEntity.name = user.name;
    userEntity.id = randomBytes(16).toString("hex");
    this.users.push(userEntity);
    return userEntity;
  }

  async index() {
    return this.users;
  }
}
