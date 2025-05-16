import express from 'express'
import {router} from './Router'
import cors from 'cors'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(router)