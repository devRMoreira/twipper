const bcrypt = require("bcrypt")

export async function hashPassword(password) {

    return bcrypt.hash(password, 10).then(function (hash) {
        return hash
    })

}

export async function isSameHashedPassword(passwordToConfirm, hashPassword) {

    return bcrypt.compare(passwordToConfirm, hashPassword).then(function (res){
        return res
    })

}