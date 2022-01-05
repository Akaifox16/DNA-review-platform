export const REGISTER_QUERY = `
mutation($user: UserCreateInput!){
    register(user: $user) {
            token
            username
        }
    }
`