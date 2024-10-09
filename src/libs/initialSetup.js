import Role from '../models/role.models.js';
import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import { ADMIN_EMAIL, ADMIN_USERNAME, ADMIN_PASSWORD } from '../config.js';

export const createAdmin = async (value) => {
  // checar si ya existe un admin

  const userFound = await User.findOne({ email: ADMIN_EMAIL });
  // console.log('user', userFound);
  if (userFound) return;

  // obtener los id de los roles
  const roleFound = await Role.findOne({ name: 'admin' });
  console.log('roleFound', roleFound);

  // encriptar la contraseña
  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
  // crear nuevo admin
  const newUser = await User.create({
    username: ADMIN_USERNAME,
    email: ADMIN_EMAIL,
    password: passwordHash,
    role: value,
  });

  console.log(`New user created: ${newUser.email}`);
};

export const createRoles = async () => {
  try {
    // Contar documentos
    const count = await Role.estimatedDocumentCount();

    // Checar si existen roles
    if (count > 0) return;

    // Crear roles por defecto
    const values = await Promise.all([
      new Role({ name: 'admin' }).save(),
      new Role({ name: 'doctor' }).save(),
      new Role({ name: 'accountant' }).save(),
      new Role({ name: 'patient' }).save(),
    ]);

    console.log(values);

    createAdmin(values.filter((rol) => rol.name === 'admin')[0]._id);
  } catch (error) {
    console.log(error);
  }
};

createRoles();
