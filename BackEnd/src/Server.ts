import {config} from 'dotenv'
import {app} from './App'
config()

const porta = process.env.PORT

app.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}`))