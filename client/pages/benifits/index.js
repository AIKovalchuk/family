import Benifits from '../../components/pages/benifits/Benifits'
import { SitePage } from '../../components/pages/SitePage'
import BenifitsService from '../../services/Benifits'

export default function BenifitsPage({ benifits }) {
    return (
        <SitePage>
            <Benifits benifits={benifits} />
        </SitePage>
    )
}

BenifitsPage.getInitialProps = async (ctx) => {
    let res = []
    try {
        res = await BenifitsService.loadAll()
    } catch (e) {
        console.log(e)
    }
    return { benifits: res }
}
