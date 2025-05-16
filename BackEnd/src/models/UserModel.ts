import connection from "./Connection";

const getAllUser = async () => {
    const [listUser] = await connection.execute("SELECT * FROM User") 
    return listUser
}

const getUserById = async (id) => {
    const [user] = await connection.execute(`SELECT * FROM User WHERE UserId = ${id}`)
    return user
}

const createUser = async (user) => {
    const query = "INSERT INTO User (UserName, UserEmail, UserPassword, UserStatus) VALUES (?,?,?,?)" 
    const [userCreated] = await connection.execute(query, [user.UserName, user.UserEmail, user.UserPassword, user.UserStatus])
    return userCreated
}

const editUser = async (user, id) => {
    const query = "UPDATE User SET UserName = ?, UserEmail = ?, UserPassword = ?, UserStatus = ? WHERE UserId = ?" 
    const [userEdited] = await connection.execute(query, [user.UserName, user.UserEmail, user.UserPassword, user.UserStatus, id])
    return userEdited
}

const deleteUser = async (id) => {
    const [userDeleted] = await connection.execute(`DELETE FROM User WHERE UserId = ${id}`)
    return
}

const login = async (user) => {
    const query = "SELECT UserName, UserEmail, UserStatus FROM User WHERE UserEmail = ? AND UserPassword = ? "
    const [userLogin] = await connection.execute(query, [user.UserEmail,user.UserPassword])
    return JSON.stringify(userLogin)
}

export default {
    getAllUser, getUserById, createUser, editUser, deleteUser, login
}