export async function sendLoginInfo(user) {

    const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })

    return res

}

export function isValidUser(user) {

    if (user !== undefined) {

        return user.user?.length > 0 && user.password?.length > 0
    }

    return false
}