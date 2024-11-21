import { Link, useLocation } from "react-router-dom"

const breadcrumbsTranslations = {
    home: 'Pradinis',
    about: 'Apie',
    help: 'Pagalba',
    faq: 'DUK',
    contact: 'Kontaktai',
    careers: 'Darbo skelbimai'
}

const getTranslation = (slug) => breadcrumbsTranslations[slug] || slug

export default function Breadcrumbs() {
    const location = useLocation()
    let currentLink = ''
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            const translatedText = getTranslation(crumb)
            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{translatedText}</Link>
                </div>
            )
        })
    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    )
}
