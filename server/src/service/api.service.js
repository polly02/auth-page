const bcrypt = require("bcrypt")
const { createUserDB, foundUser } = require("../repository/api.repository")
const saltround = 10

async function createUser(email, pwd) {
    const user = await foundUser(email)
    if (user.length) throw new Error("такой пользователь есть")

    const hashedPwd = await bcrypt.hash(pwd, saltround)

    await createUserDB(email, hashedPwd)
}

async function doAuthorisation(email, pwd) {
    const user = await foundUser(email)
    if (!user.length) throw new Error("такого пользователя нет")

    const hashedPwd = userPwd[0].pwd

    if (!(await bcrypt.compare(pwd, hashedPwd))) throw new Error("неверный пароль")
}

module.exports = { createUser, doAuthorisation }