const setup = {
    name: 'experience',
    portfolioSlide: true,
    floatingPreview: true,
}
const menu = {
    title: 'Experience',
    hash: '#experience',
    icon: 'PhFolderOpen',
}
const content = [
    {
        company: 'ObjectWare',
        companyLogo: 'https://www.objectware.fr/wp-content/themes/objectware-2018/images/favicon.ico',
        fromAndTo: "Fév 2022 - Aujourd'hui",
        jobTitle: 'Temps plein - Analyste Développeur',
        yourWorkThere:
            "Durant cette expérience, j'ai effectué des missions d'analyse des besoins clients, de spécifications fonctionnelles et techniques, d'estimation de charge des développements, de coordination entre équipes MOA/MOE, de développement en COBOL/DB2, de test, et d'accompagnement des déploiements en environnement de production, utilisant des technologies telles que le grand système IBM Z/OS, COBOL Batch et Transactionnel, DB2, JCL et DLI.",
        website: 'https://www.objectware.fr/',
        thumbnail:
            'https://www.objectware.fr/wp-content/themes/objectware-2018/images/logo.svg',
        companySector: 'Services Informatiques', //e.g Fintech, education, goverment,
    },
    {
        company: 'AtoS',
        companyLogo: 'https://atos.net/wp-content/themes/atos/images/favicons/favicon.ico',
        fromAndTo: 'Avr 2018 - Sept 2021',
        jobTitle: 'Temps plein - Analyste Développeur',
        yourWorkThere:
            "j'ai travaillé sur l'analyse, le développement et le test de composants. J'ai également assuré la maintenance préventive des traitements et la résolution des incidents en production.",
        website: 'https://atos.net/fr/',
        thumbnail:
            'https://atos.net/content/assets/global-images/atos-logo-blue-2022.svg',
        companySector: 'Services informatiques', //e.g Fintech, education, goverment,
    },
]

export default {
    setup,
    menu,
    content,
}
