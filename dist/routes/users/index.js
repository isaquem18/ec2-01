"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const uuid_1 = require("uuid");
const UsersRepository_1 = require("../../repositories/UsersRepository");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
const Users = new UsersRepository_1.UsersRepository();
usersRoutes.get('/', (req, res) => {
    const users = Users.list();
    return res.status(200).json(users);
});
usersRoutes.get('/:id', (req, res) => {
    const { id } = req.params;
    // validate uuid format
    const uuidIsValid = (0, uuid_1.validate)(id);
    if (!uuidIsValid)
        return res.status(400).json({ message: 'Invalid id.' });
    // verify if user already exists
    const user = Users.findOne(id);
    if (!user)
        return res.status(404).json({ message: 'User not found.' });
    return res.status(200).json(user);
});
usersRoutes.post('/', (req, res) => {
    const { name, cpf } = req.body;
    const newUser = Users.create({ name, cpf });
    return res.status(201).json(newUser);
});
