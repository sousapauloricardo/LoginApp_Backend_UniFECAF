import userModel from '../models/UserModel'
import jwt from 'jsonwebtoken'

const getAllUser = async (_req, res) => {
    const listTask = await userModel.getAllUser()
    return res.status(200).json(listTask)
}

const getUserById = async (req, res) => {
    const task = await userModel.getUserById(req.params.id)
    return res.status(200).json(task)
}

const createUser = async (req, res) => {
    const task = await userModel.createUser(req.body)
    return res.status(200).json(task)
}

const editUser = async (req, res) => {
    const task = await userModel.editUser(req.params.id, req.body)
    return res.status(200).json(task)
}

const deleteUser = async (req, res) => {
    const task = await userModel.deleteUser(req.params.id)
    return res.status(200).json(task)
}

const login = async (req, res) => {

    const user = await userModel.login(req.body)

    const result = JSON.parse(user)

    if(result[0] == null || result[0] == ""){
        return res.status(401).json({erro:"Email ou senha inválidos."})
    }
    const {id} = result
    const token = jwt.sign({userid:id},process.env.SECRET,{expiresIn:300})
    
    return res.status(200).json({erro: "Login efetuado com sucesso!" ,auth: true,token})
}

export default {
    getAllUser, getUserById, createUser, editUser, deleteUser, login
}