import { SitePage } from '../../components/pages/SitePage'
import { useRouter } from 'next/router'
import Benifit from '../../components/pages/benifits/Benifit'
import Axios from 'axios'
import BenifitsService from '../../services/Benifits'

export default function BenifitPage({ benifit }) {
    return (
        <SitePage>
            <Benifit {...benifit} />
        </SitePage>
    )
}
BenifitPage.getInitialProps = async (ctx) => {
    console.log(ctx.query)
    let res = {}
    try {
        res = await BenifitsService.loadById(ctx.query.id)
    } catch (e) {}
    return { benifit: res }
}
