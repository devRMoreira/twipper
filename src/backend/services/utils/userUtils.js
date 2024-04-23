export function filterUserLogin(user) {
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        displayName: user.displayName,
        avatar: user.avatar,
    }


}