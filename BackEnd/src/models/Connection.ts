import mysql from 'mysql2/promise'
import {config} from 'dotenv'
config()

const host = process.env.HOST
const user = process.env.USER
const pass = process.env.PASSWORD
const database = process.env.DATABASE

const connection = mysql.createPool({
    host: 'localhost',
    user: 'aluno',
    password: 'toor',
    database: 'ToList'
})

export default connection;