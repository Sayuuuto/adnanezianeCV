const setup = {
    name: 'education',
}
const menu = {
    title: 'Education',
    hash: '#education',
    icon: 'PhGraduationCap',
}
const content = [
    {
        school: 'Faculté Polydisciplinaire Beni Mellal',
        logo: '../public/fplogo_145x154.png',
        certificationName: 'Master Spécialisé Ingénierie des Systèmes Informatique ',
        fromAndTo: '2016 - 2018',
        snippet:
            'I mastered the art of creating interfaces even with my eyes close',
    },
    {
        school: 'Faculté Sciences et Techniques Settat',
        logo: 'https://logo.clearbit.com/mit.edu',
        certificationName: 'Licence sciences et techniques Génie Informatique',
        fromAndTo: '2015 - 2016',
        snippet:
            'I mastered the tech of designing awesome interfaces while making a sandwish',
    },
]

export default {
    setup,
    menu,
    content,
}
