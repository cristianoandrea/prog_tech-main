import Cane1 from '../../images/svg-1.svg'
import Cane2 from '../../images/svg-2.svg'
import Gatto1 from '../../images/svg-3.svg'
import Gatto2 from '../../images/svg-4.svg'

export const homeObjStore = { //light
    id: 'store',
    link: '/store',
    lightBg:true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Store',
    headline:'Qui puoi trovare tutti i prodotti di cui disponiamo',
    description: 'Cosa aspetti? Vai a dare un occhio!',
    buttonLabel: 'Clicca per vedere i nostri prodotti',
    imgStart: false,
    img: Cane2,
    alt: 'cane',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjPresenza = { //dark
    id: 'presenza',
    link: '/presenza',
    lightBg:false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'presenza',
    headline:'Servizi in presenza offerti da Animal House',
    description: 'Qui puoi trovare tutti i servizi di cui disponiamo, abbiamo sedi in tutta Italia!',
    buttonLabel: 'Clicca per vedere cosa offrono le nostre strutture',
    imgStart: true,
    img: Cane1,
    alt: 'cane',
    dark: true,
    primary: true,
    darkText: false
}


export const homeObjCommunity = { //dark
    id: 'community',
    link: '/community',
    lightBg:false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Community',
    headline:'Bacheca online',
    description: 'Qua si puo interagire tra proprietari di animali per scoprire gli interessi dei tuoi simili!',
    buttonLabel: 'Servizi di community',
    imgStart: true,
    img: Gatto2,
    alt: 'cane',
    dark: true,
    primary: true,
    darkText: false
}



export const objVeterinario={
    id: 'veterinario',
    link: "/presenza/veterinario",
    lightBg:false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Veterinario',
    headline:'I migliori specialisti per la cura dei tuoi cuccioli',
    description: "I nostri esperti veterinari offrono cure personalizzate per la salute e il benessere dei tuoi amati animali domestici.",
    buttonLabel: 'Cerca qui il migliore',
    imgStart: true,
    img: Gatto2,
    alt: 'cane',
    dark: true,
    primary: true,
    darkText: false
}

export const objDogSitter = { //light
    id: 'cuccioli',
    link: "/presenza/dogsitting",
    lightBg:true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Dogsitting',
    headline:'Lascia il tuo animale in una delle nostre sedi!',
    description: "I nostri dogsitter altamente qualificati offrono un'assistenza amorevole e affidabile per i tuoi animali domestici, mentre sei fuori casa.",
    buttonLabel: 'Prenota subito',
    imgStart: false,
    img: Gatto1,
    alt: 'cane',
    dark: false,
    primary: false,
    darkText: true
}

export const objToilettatura={ 
    id: 'toilettatura',
    link: "/presenza/toilettatura",
    lightBg:false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Toilettatura',
    headline:"Fai brillare i tuoi amici pelosi con la nostra toilettatura professionale!",
    description: "Toilette professionali per cani e gatti: facciamo sì che i tuoi animali domestici siano sempre puliti e curati!",
    buttonLabel: 'Clicca per maggiori informazioni',
    imgStart: true,
    img: Gatto2,
    alt: 'cane', 
    dark: true,
    primary: true,
    darkText: false
}