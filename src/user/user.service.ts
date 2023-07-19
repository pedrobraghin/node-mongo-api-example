import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { UserRepository } from "./user.repository";

export class UserService {
  private userRepository: UserRepository;
  private static instance: UserService;

  private constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public static getInstance(userRepository: UserRepository): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService(userRepository);
    }
    return UserService.instance;
  }

  async createUser(input: CreateUserDTO): Promise<UserEntity> {
    const user = await this.userRepository.createUser(input);
    return user;
  }

  async listUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.index();
    return users;
  }
}
