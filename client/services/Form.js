const FormService = {
    sendForm: (form) => {
        return new Promise((resolve) => setTimeout(resolve, 1440)).then(() => {
            return { status: 'ok' }
        })
    },
}

export default FormService