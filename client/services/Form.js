import Axios from 'axios'

const FormService = {
    sendForm: (form) => {
        // return new Promise((resolve) => setTimeout(resolve, 1440)).then(() => {
        //     return { status: 'ok' }
        // })
        // const body = JSON.stringify(form)
        // return Axios.post(
        //     'https://family-gateway.herokuapp.com/exemption/',
        //     { body },
        //     {
        //         headers: {
        //             Authorization:
        //                 'Bearer ' +
        //                 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbm9ueW1vdXMiLCJleHAiOjE1OTk5ODI5MjIsImlhdCI6MTU5OTk2NDkyMn0.LQBMHbLwvFKSwmtykEHyFWH1qKysg1xYtviXFQ65vP4osmQcTolfjGiOHJXECBEGiY8uHeLS3-yZ_lzNFH09YA',
        //         },
        //     },
        // ).then((res) => {
        //     return res.data
        // })

        return new Promise((resolve) => setTimeout(resolve, 1444)).then(() => {
            //const benifits =
            return [
                {
                    title: 'Льгота 1',
                    href: '1',
                    description: 'Эта льгота предоставляется особой категории граждан',
                    createdAt: '2020-09-13',
                },
                {
                    title: 'Льгота 2',
                    href: '1',
                    description: ' Эта льгота предоставляется особой категории граждан',
                    createdAt: '2020-09-13',
                },
                {
                    title: 'Льгота 3',
                    href: '1',
                    description: 'Эта льгота предоставляется особой категории граждан',
                    createdAt: '2020-09-13',
                },
                {
                    title: 'Льгота 4',
                    href: '1',
                    description: 'Эта льгота предоставляется особой категории граждан',
                    createdAt: '2020-09-13',
                },
            ]
        })
    },
}

export default FormService
