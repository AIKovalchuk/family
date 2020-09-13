const BenifitsService = {
    loadAll: () => {
        // const benifits = [
        //     { title: 'title1', href: '1' },
        //     { title: 'title1', href: '2' },
        //     { title: 'title1', href: '3' },
        //     { title: 'title1', href: '4' },
        //     { title: 'title1', href: '5' },
        //     { title: 'title1', href: '6' },
        //     { title: 'title1', href: '7' },
        //     { title: 'title1', href: '8' },
        //     { title: 'title1', href: '9' },
        //     { title: 'title1', href: '10' },
        //     { title: 'title1', href: '11' },
        //     { title: 'title1', href: '12' },
        //     { title: 'title1', href: '13' },
        //     { title: 'title1', href: '14' },
        // ]
        return new Promise((resolve) => setTimeout(resolve, 1444)).then(() => {
            //const benifits =
            return [
                { title: 'title1', href: '1' },
                { title: 'title1', href: '2' },
                { title: 'title1', href: '3' },
                { title: 'title1', href: '4' },
                { title: 'title1', href: '5' },
                { title: 'title1', href: '6' },
                { title: 'title1', href: '7' },
                { title: 'title1', href: '8' },
                { title: 'title1', href: '9' },
                { title: 'title1', href: '10' },
                { title: 'title1', href: '11' },
                { title: 'title1', href: '12' },
                { title: 'title1', href: '13' },
                { title: 'title1', href: '14' },
            ]
        })
    },

    loadById: (id) => {
        return new Promise((resolve) => setTimout(resolve, 14)).then(() => {
            return {
                title: 'Title ' + id,
                created: '01.04.2020',
                socialStatus: ['Пенсионеры'],
                text: 'Оооооооооочень долгий прикаааааззззз',
                ministere: 'Министерство Важных Дел',
                benifits: 'тыща',
            }
        })
    },
}

export default BenifitsService
