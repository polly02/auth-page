const { createUserDB, foundUser } = require("../repository/api.repository")

async function createUser(email, pwd) {
    const user = await foundUser(email)
    if(user,length) throw new Error("такой пользователь есть")

    await createUserDB(email, pwd)
}

module.exports = { createUser }