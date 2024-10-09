import mongoose, { mongo } from 'mongoose';

export const ROLES = ['admin', 'doctor', 'accountant', 'patient'];

const roleSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Role', roleSchema);
