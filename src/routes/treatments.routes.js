import { Router } from 'express';
import { ROLES } from '../config.js';
import {
  createTreatment,
  getTreatment,
  getTreatments,
  deleteTreatment,
  updateTreatment,
} from '../controllers/treatments.controller.js';
import { auth } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/validateRoles.middleware.js';
import { validatorSchema } from '../middlewares/validator.middleware.js';
import { treatmentSchema } from '../schemas/treatment.schema.js';

const router = Router();

router.post(
  '/treatment',
  auth,
  authorizeRoles(ROLES.admin),
  validatorSchema(treatmentSchema),
  createTreatment
);

router.get(
  '/treatments',
  auth,
  authorizeRoles(ROLES.admin, ROLES.doctor),
  getTreatments
);

router.get(
  '/treatment/:id',
  auth,
  authorizeRoles(ROLES.admin, ROLES.doctor),
  getTreatment
);

router.put(
  '/treatment/:id',
  auth,
  authorizeRoles(ROLES.admin),
  updateTreatment
);

router.delete(
  '/treatment/:id',
  auth,
  authorizeRoles(ROLES.admin),
  deleteTreatment
);

export default router;
