import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.findById(user_id);

    if (!users) {
      throw new Error("User does not exists");
    }
    if (!users.admin) {
      throw new Error("User not a admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
