export async function sendLoginInfo(user) {

    const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })

    return res.ok

}

export function isValidUser(user) {

    return user.user.length > 0 && user.password.length > 0
}