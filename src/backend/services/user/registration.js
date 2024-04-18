import moment from "moment"

export async function createNewUser(user) {

    return {
        ...user,
        joinDate: moment.now(),
        displayName: user.name,
        avatar: undefined,
        banner: undefined,
        bio: undefined,
        location: undefined,
        totalPosts: 0,
        following: [],
        followers: [],
        tweeps: [],
        replies: [],
        likes: []
    }


}


// {
//     name: 'Abcd',
//     email: 'abcd@abcd.ef',
//     password: '$2b$10$sxELPc4/dPaZwsS8yfE1E.XaFUs0/L8XoH32GzzkD7NrNzN9VZD2e',
//     birthDate: 123091230102312
//   }




