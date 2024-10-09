import Patient from '../models/patient.models.js';
import Budget from '../models/budget.models.js';
import UploadFile from '../libs/cloudinary.js';

export const createPatient = async (req, res) => {
  try {
    const {
      name,
      lastname,
      identification,
      picture,
      reasonConsultation,
      personalHistory,
      familyHistory,
    } = req.body;

    const uploadImage = req.file
      ? await UploadFile(req.file.path, 'clinicPatient')
      : '';

    const newPatient = await new Patient({
      name,
      lastname,
      identification,
      picture: uploadImage.url,
      reasonConsultation,
      personalHistory,
      familyHistory,
      user: req.user.id,
    });

    const savedPatient = await newPatient.save();

    res.json(newPatient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate('user', 'username');
    res.json(patients);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePatient = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
    if (!deletedPatient)
      return res.status(404).json({ message: 'Paciente no encontrado' });

    return res.sendStatus(204).json({ message: 'Paciente eliminado' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePatient = async (req, res) => {
  try {
    const {
      name,
      lastname,
      identification,
      picture,
      reasonConsultation,
      personalHistory,
      familyHistory,
    } = req.body;

    const uploadImage = req.file
      ? await UploadFile(req.file.path, 'clinicPatient')
      : '';

    const patientUpdated = await Patient.findOneAndUpdate(
      { _id: req.params.id },
      {
        name,
        lastname,
        identification,
        picture: req.file ? uploadImage.url : picture,
        reasonConsultation,
        personalHistory,
        familyHistory,
      },
      {
        new: true,
      }
    );
    return res.json(patientUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate(
      'user',
      'username'
    );
    const budgets = await Budget.find({ patientID: req.params.id })
      .select('-treatments')
      .populate('user', 'username createdAt');

    if (!patient)
      return res.status(404).json({ message: 'Paciente no encontrado' });
    return res.json({
      ...patient._doc,
      budgets,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCurrentUserPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ user: req.user.id });
    res.json(patients);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
