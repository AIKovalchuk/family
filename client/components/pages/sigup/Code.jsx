import React, { useState } from 'react'
import Button from '../../base/Button'
import AuthService from '../../../services/Auth'
import { useRouter } from 'next/router'

const Code = () => {
    const [code, setCode] = useState(null)
    const router = useRouter()
    const onSubmit = (code) => {
        AuthService.verify2fa(code)
            .then((e) => {
                if (e === 'CORRECT') {
                    router.push('/login')
                } else {
                    router.push('/register')
                }
            })
            .catch((e) => console.log(e))
    }
    return (
        <div className="code">
            <input
                value={code}
                handleChange={(e) => {
                    setCode(e.target.value)
                }}
            />
            <Button small onClick={() => onSubmit(code)}>
                Отправить
            </Button>
        </div>
    )
}

export default Code
