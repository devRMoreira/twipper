import moment from "moment"

export async function sendNewRegistration(user) {

    const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })

    return res.ok

}


export function isValidName(name) {

    return {
        special: nameContainsSpecialCharacters(name),
        length: nameLength(name)
    }

}


export function isValidBirthdate(date) {
    // days 4749
    const now = moment()
    const diff = now.diff(date, "days")
    return diff >= 4749

}


function nameContainsSpecialCharacters(name) {

    return /^[a-zA-Z0-9_]+$/.test(name)

}

function nameLength(name) {

    return name.length >= 4

}

export function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

}

export function isValidPassword(password) {

    return {
        number: passwordContainsNumber(password),
        letter: passwordContainsLetter(password),
        length: passwordLength(password)
    }

}

export function checkPasswordsMatch(password, passwordConf) {
    return password === passwordConf
}

function passwordContainsNumber(password) {
    return /\d/.test(password)
}

function passwordContainsLetter(password) {
    return /[a-zA-Z]/.test(password)
}

function passwordLength(password) {
    return password.length >= 6
}

export function validateAllFields(fieldChecks) {

    delete fieldChecks.allFields

    let validation = false

    const keys = Object.keys(fieldChecks)

    if (keys.length > 0) {

        validation = Object.values(fieldChecks).every((ele) => {

            if (typeof ele === "object") {

                return Object.values(ele).every((subEle) => subEle === true)
            } else {
                return ele === true
            }
        })

    }

    return validation
}

