import { Router } from 'express'
import {
    store,
    index
} from '../controllers/expeditionController.js'

const router = Router()

router.post('/', store)
router.get('/', index)

export default router