import mongoose from 'mongoose';

const treatmentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Treatment', treatmentsSchema);
