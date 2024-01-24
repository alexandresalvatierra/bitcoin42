import { Entity } from "../../../core/domain/entities/entity";

type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class UserEntity extends Entity<UserProps> {
  static create(props: UserProps, id?: string) {
    const userEntity = new UserEntity(props, id);

    return userEntity;
  }
}
