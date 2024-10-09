import Role from '../models/role.models.js';

export const authorizeRoles = (...allowedRoles) => {
  return async (req, res, next) => {
    const roleFound = await Role.findOne({ _id: req.user.role });

    if (!allowedRoles.includes(roleFound.name)) {
      return res.status(403).json({ message: 'No tiene permiso para acceder' });
    }
    next();
  };
};
