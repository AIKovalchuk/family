import { SitePage } from '../../components/pages/SitePage'
import { useRouter } from 'next/router'
import Benifit from '../../components/pages/benifits/Benifit'
import Axios from 'axios'
import BenifitsService from '../../services/Benifits'

export default function BenifitPage({ benifit }) {
    const res = {
        title: 'Title ',
        created: '01.04.2020',
        socialStatus: ['Пенсионеры'],
        text: 'Оооооооооочень долгий прикаааааззззз',
        ministere: 'Министерство Важных Дел',
        benifits: 'тыща',
    }
    return (
        <SitePage>
            <Benifit {...res} />
        </SitePage>
    )
}
BenifitPage.getInitialProps = async (ctx) => {
    console.log(ctx.query)
    let res = {}
    try {
        res = await BenifitsService.loadById(ctx.query.id)
    } catch (e) {}
    res = {
        title: 'Title ',
        created: '01.04.2020',
        socialStatus: ['Пенсионеры'],
        text: 'Оооооооооочень долгий прикаааааззззз',
        ministere: 'Министерство Важных Дел',
        benifits: 'тыща',
    }
    return { benifit: res }
}
