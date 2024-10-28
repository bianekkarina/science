import Expedition from '../models/Expedition.js'

export const store = async (req, res) => {
    try {
        const expedition = await Expedition.create(req.body)
        return res.status(201).json({
            message: 'Expedição cadastrada com sucesso!',
            expedition: expedition
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const index = async (req, res) => {
    try {
        const expedition = await Expedition.find().exec()
        return res.status(200).json(expedition)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}