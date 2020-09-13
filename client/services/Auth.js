import Axios from 'axios'

const AuthService = {
    login: (form) => {
        // return new Promise((resolve) => setTimout(resolve, 3000)).then(() => {
        //     return { status: 'ok' }
        // })
        const body = JSON.stringify(form)
        return Axios.post('https://family-gateway.herokuapp.com/authenticate', {
            body,
        }).then((res) => {
            return res.data
        })
    },

    verify2fa: (code) => {
        return Axios.post('https://family-gateway.herokuapp.com/auth/verify2fa', {
            code: code,
        }).then((res) => {
            return res.data
        })
    },

    sigup: (form) => {
        const body = JSON.stringify(form)
        return Axios.post('https://family-gateway.herokuapp.com/auth/register', {
            body,
        }).then((res) => {
            return res.data
        })
    },
}

export default AuthService
