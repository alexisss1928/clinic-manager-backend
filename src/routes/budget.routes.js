import { Router } from 'express';
import { ROLES } from '../config.js';
import { createBudget, getBudget } from '../controllers/budget.controller.js';
import { auth } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/validateRoles.middleware.js';
import { validatorSchema } from '../middlewares/validator.middleware.js';
import { budgetSchema } from '../schemas/budget.schema.js';

const router = Router();

router.post(
  '/budget',
  auth,
  authorizeRoles(ROLES.admin, ROLES.doctor),
  validatorSchema(budgetSchema),
  createBudget
);

router.get(
  '/budget/:id',
  auth,
  authorizeRoles(ROLES.admin, ROLES.doctor),
  getBudget
);

export default router;
