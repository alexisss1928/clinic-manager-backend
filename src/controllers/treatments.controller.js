import Treatment from '../models/treatments.models.js';

export const createTreatment = async (req, res) => {
  try {
    const { name, price } = req.body;

    const newTreatment = new Treatment({
      name,
      price,
    });

    const savedTreatment = await newTreatment.save();
    res.json(savedTreatment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find();
    res.json(treatments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTreatment = async (req, res) => {
  try {
    const deleteTreatment = await Treatment.findByIdAndDelete(req.params.id);
    if (!deleteTreatment)
      return res.status(404).json({ message: 'Tratamiento eliminado' });

    return res.sendStatus(204).json({ message: 'Tratamiento eliminado' });
  } catch (error) {
    return res.status(500).json({ message: error.status });
  }
};

export const updateTreatment = async (req, res) => {
  try {
    const { name, price } = req.body;
    const treatmentUpdated = await Treatment.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name,
        price,
      },
      {
        new: true,
      }
    );
    return res.json(treatmentUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTreatment = async (req, res) => {
  try {
    const treatment = await Treatment.findById(req.params.id);
    if (!treatment)
      return res.status(400).json({ message: 'Tratamiento no encontrado' });
    return res.json(treatment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
