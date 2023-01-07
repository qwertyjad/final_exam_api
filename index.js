import express from 'express'
import corse from 'corse'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from '.routes/auth.js'
import userRoutes from '.routes/users.js'
import programRoutes from '.routes/programs.js'
import scheduleRoutes from '.routes/schedules.js'
import subjectRoutes frome '.routes/subjects.js'

dotenv.config
const app = express
app.use(express.json())
app.use(express.urlencoded({ extend: true })
app.use(cors())

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/porgrams', programRoutes)
app.use('/programs/:programId/subjects',subjectRoutes)
app.use('/subject/:subjectId/schedules',scheduleRoutes)

const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
  dbname: 'jadei'
})
.then(()=> app.listen(PORT, () => console.log('Server Listening on ${PORT} ')))
.catch((error) => console.log('${error} did not connect '))