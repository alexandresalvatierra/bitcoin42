import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../../../domain/entities/user.entity";
import { UserRepository } from "../../../domain/repositories/user.repository";

export class UserPrismaRepository implements UserRepository {
  private readonly prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(userEntity: UserEntity): Promise<UserEntity | false> {
    const { name, email, password } = userEntity.props;

    return await this.prisma.user
      .create({
        data: {
          name,
          email,
          password,
        },
      })
      .then((user) => {
        const { id, name, email, password } = user;
        console.log(user);
        return UserEntity.create(
          {
            name,
            email,
            password,
          },
          id
        );
      })
      .catch((e) => {
        console.log(e);
        return false;
      });
  }
}
