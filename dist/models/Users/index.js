"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const uuid_1 = require("uuid");
class Users {
    constructor({ name, cpf }) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.cpf = cpf;
    }
}
exports.Users = Users;
