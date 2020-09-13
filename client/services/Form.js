import Axios from 'axios'

const FormService = {
    sendForm: (form) => {
        // return new Promise((resolve) => setTimeout(resolve, 1440)).then(() => {
        //     return { status: 'ok' }
        // })

        const body = JSON.stringify(form)
        return Axios.post(
            'https://family-gateway.herokuapp.com/exemption/',
            { body },
            {
                headers: {
                    Authorization:
                        'Bearer ' +
                        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbm9ueW1vdXMiLCJleHAiOjE1OTk5ODI5MjIsImlhdCI6MTU5OTk2NDkyMn0.LQBMHbLwvFKSwmtykEHyFWH1qKysg1xYtviXFQ65vP4osmQcTolfjGiOHJXECBEGiY8uHeLS3-yZ_lzNFH09YA',
                },
            },
        ).then((res) => {
            return res.data
        })
    },
}

export default FormService
