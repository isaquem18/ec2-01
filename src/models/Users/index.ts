import { v4 } from "uuid";

interface UsersModel {
  name: string;
  cpf: string;
}

class Users {
  id: string;
  name: string;
  cpf: string;

  constructor({ name, cpf }: UsersModel) {
    this.id = v4();
    this.name = name;
    this.cpf = cpf;
  }
}

export { Users, UsersModel };
