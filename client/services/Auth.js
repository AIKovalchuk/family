const AuthService = {
    login: (email, password) => {
        return new Promise((resolve) => setTimout(resolve, 3000)).then(() => {
            return { status: 'ok' }
        })
    },

    sigup: (form) => {
        return new Promise((resolve) => setTimout(resolve, 3000)).then(() => {
            return { status: 'ok' }
        })
    },
}

export default AuthService
