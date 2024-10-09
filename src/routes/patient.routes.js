import { Router } from 'express';
import { ROLES } from '../config.js';
import {
  createPatient,
  getPatients,
  deletePatient,
  getPatient,
  updatePatient,
  getCurrentUserPatients,
} from '../controllers/patient.controller.js';
import { auth } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/validateRoles.middleware.js';
import { validatorSchema } from '../middlewares/validator.middleware.js';
import { createPatientSchema } from '../schemas/patient.schema.js';
import upload from '../middlewares/multer.middleware.js';

const router = Router();

router.post(
  '/patient',
  auth,
  upload.single('picture'),
  validatorSchema(createPatientSchema),
  createPatient
);
router.get(
  '/patients',
  auth,
  authorizeRoles(ROLES.admin, ROLES.doctor),
  getPatients
);
router.delete('/patient/:id', auth, authorizeRoles(ROLES.admin), deletePatient);
router.put(
  '/patient/:id',
  auth,
  authorizeRoles(ROLES.admin, ROLES.doctor),
  upload.single('picture'),
  updatePatient
);
router.get(
  '/patient/:id',
  auth,
  authorizeRoles(ROLES.admin, ROLES.doctor),
  getPatient
);
router.get(
  '/user-patients',
  auth,
  authorizeRoles(ROLES.admin, ROLES.doctor),
  getCurrentUserPatients
);

export default router;
