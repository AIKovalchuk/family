import AuthPage from '../../components/pages/auth/AuthPage'
import { SitePage } from '../../components/pages/SitePage'

export default function Index(params) {
    return (
        <SitePage>
            <AuthPage />
        </SitePage>
    )
}
