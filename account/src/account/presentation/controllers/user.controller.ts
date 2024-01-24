import { Request, Response } from "express";
import { makeUserRepositoryFactory } from "../../infra/factories/user-repository.factory";
import { CreateUserUseCase } from "../../use-case";

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const userRepository = makeUserRepositoryFactory();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    const result = await createUserUseCase.perform({
      name,
      email,
      password,
    });
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(200).send({ error: true, message: "User can not created" });
    }
  }
}
