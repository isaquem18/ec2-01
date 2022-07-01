import { Router } from 'express';
import { validate } from 'uuid';
import { UsersRepository } from '../../repositories/UsersRepository';

const usersRoutes = Router();
const Users = new UsersRepository();

usersRoutes.get('/', (req, res) => {
  const users = Users.list();
  return res.status(200).json(users);
});

usersRoutes.get('/:id', (req, res) => {

  const { id } = req.params;

  // validate uuid format
  const uuidIsValid = validate(id)
  if (!uuidIsValid) return res.status(400).json({ message: 'Invalid id.' })
  
  // verify if user already exists
  const user = Users.findOne(id);
  if (!user) return res.status(404).json({ message: 'User not found.' });

  return res.status(200).json(user);

});

usersRoutes.post('/', (req, res) => {

  const { name, cpf } = req.body;

  const newUser = Users.create({ name, cpf });

  return res.status(201).json(newUser);
  
});


export { usersRoutes };