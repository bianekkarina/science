import express from 'express'
import connectDB from './config/db.js'
import explorerRouter from './routers/explorerRouter.js'
import speciesRouter from './routers/speciesRouter.js'
import expeditionRouter from './routers/expeditionRouter.js'

connectDB()

const app = express()
app.use(express.json())

app.use('/explorer', explorerRouter)
app.use('/species', speciesRouter)
app.use('/expedition', expeditionRouter)

app.listen(3000, () => console.log('Servidor rodando na porta 3000!'));