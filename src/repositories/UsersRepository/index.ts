import { Users, UsersModel } from "../../models/Users";

const users: any = [];

class UsersRepository {

  list() {
    return users;
  }

  findOne(id: string) {
    const [user] = users.filter((item: any) => item.id === id);
    return user;
  }

  create({ name, cpf }: UsersModel) {
    const newuser = new Users({ name, cpf });
    users.push(newuser);
    return newuser;
  }
}

export { UsersRepository };
