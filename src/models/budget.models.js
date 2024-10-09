import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    patientID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    treatments: [
      {
        name: { type: String },
        price: { type: Number },
        quantity: { type: Number },
        observation: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Budget', budgetSchema);
