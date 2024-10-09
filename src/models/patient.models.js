import mongoose from 'mongoose';

const patientHC = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    identification: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    reasonConsultation: {
      type: String,
    },
    personalHistory: {
      type: String,
    },
    familyHistory: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Patient', patientHC);
