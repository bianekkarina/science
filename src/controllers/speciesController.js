import Species from '../models/Species.js'

export const store = async (req, res) => {
    try {
        const species = await Species.create(req.body)
        return res.status(201).json({
            message: 'Espécie cadastrada com sucesso!',
            species: species
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const index = async (req, res) => {
    try {
        const species = await Species.find().exec()
        return res.status(200).json(species)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const show = async (req, res) => {
    try {
      const species = await Species.findById(req.params.id).exec();
      if (!species) {
        return res.status(404).json({ error: 'Espécie não encontrada.' });
      }
      res.json(species)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
  };

export const update = async (req, res) => {
    try {
        const species = await Species.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(201).json({
            message: 'Dados da espécie atualizados com sucesso!',
            species: species
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const destroy = async (req, res) => {
    try {
        const species = await Species.findByIdAndDelete(req.params.id).exec()
        return res.status(201).json({
            message: 'Dados da espécie deletados com sucesso!',
            species: species
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
