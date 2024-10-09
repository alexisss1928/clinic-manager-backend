import Budget from '../models/budget.models.js';

export const createBudget = async (req, res) => {
  try {
    const { user, patientID, treatments } = req.body;

    const newBudget = new Budget({
      user: req.user.id,
      patientID,
      treatments,
    });

    const savedBudget = await newBudget.save();
    res.json(newBudget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBudget = async (req, res) => {
  try {
    const budget = await Budget.find({ _id: req.params.id }).populate(
      'user',
      'username'
    );

    if (!budget)
      return res.status(404).json({ message: 'Paciente no encontrado' });
    return res.json(budget);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
