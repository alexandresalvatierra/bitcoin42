import { UseCase } from "src/core/use-case/use-case";
import { UserRepository } from "../domain/repositories/user.repository";
import { UserEntity } from "../domain/entities/user.entity";

export type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
};

export type CreateUserResponse = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export class CreateUserUseCase implements UseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async perform(
    request: CreateUserRequest
  ): Promise<CreateUserResponse | false> {
    const { name, email, password } = request;

    const userEntity = UserEntity.create({
      name,
      email,
      password,
    });

    const userEntityCreated = await this.userRepository.create(userEntity);

    if (userEntityCreated) {
      const { name, email, password } = userEntityCreated.props;
      const id = userEntityCreated.id;
      return {
        id,
        name,
        email,
        password,
      };
    } else {
      return false;
    }
  }
}
