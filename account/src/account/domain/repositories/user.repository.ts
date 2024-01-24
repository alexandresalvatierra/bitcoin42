import { UserEntity } from "../entities/user.entity";
import { CreateRepository } from "../../../core/domain/repositories";

export interface UserRepository extends CreateRepository<UserEntity> {
  create(entity: UserEntity): Promise<UserEntity | false>;
}
