import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from '../config/databaseconnection.js'
import tasksRouter from './modules/tasks/tasksroutes.js'
import { globalerr } from './middlewares/globalerr.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use(async (_req, _res, next) => {
  await connectDB()
  next()
})

app.use('', tasksRouter)

app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.use(globalerr)


if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

export default app