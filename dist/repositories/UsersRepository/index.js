"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const Users_1 = require("../../models/Users");
const users = [];
class UsersRepository {
    list() {
        return users;
    }
    findOne(id) {
        const [user] = users.filter((item) => item.id === id);
        return user;
    }
    create({ name, cpf }) {
        const newuser = new Users_1.Users({ name, cpf });
        users.push(newuser);
        return newuser;
    }
}
exports.UsersRepository = UsersRepository;
