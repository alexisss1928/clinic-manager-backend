export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/clinicmanager';
export const TOKEN_SECRET = process.env.TOKEN_SECRET || 'secret';
export const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
export const ROLES = {
  admin: 'admin',
  doctor: 'doctor',
  accountant: 'accountant',
  patient: 'patient',
};
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@localhost';
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin1234';
