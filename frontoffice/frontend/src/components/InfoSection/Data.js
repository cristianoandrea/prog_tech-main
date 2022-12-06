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
    topLine: 'E poi gli dico',
    headline:'Che non me li aspettavo',
    description: 'Tutti questi addii',
    buttonLabel: 'Store',
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
    headline:'Pensavo che ogni cosa che amavo poi rimaneva mia',
    description: 'Però pensavo male',
    buttonLabel: 'Servizi in presenza',
    imgStart: true,
    img: Cane1,
    alt: 'cane',
    dark: true,
    primary: true,
    darkText: false
}



export const homeObjOnline = { //light
    id: 'online',
    link: '/online',
    lightBg:true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'online',
    headline:'Il fatto è che non c è',
    description: 'Una regola o una morale da ricavare',
    buttonLabel: 'Servizi online',
    imgStart: false,
    img: Gatto1,
    alt: 'cane',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjCommunity = { //dark
    id: 'community',
    link: '/community',
    lightBg:false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'community',
    headline:'Sono con lo stesso amico mio',
    description: 'È una sera di alcuni anni dopo, lo stringo vicino',
    buttonLabel: 'Servizi di community',
    imgStart: true,
    img: Gatto2,
    alt: 'cane',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjFive = { //light
    id: 'cuccioli',
    lightBg:true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'cuccioli',
    headline:'Siamo affacciati da una finestra qualunque, sopra un cortile qualunque',
    description: 'Ma questa notte ci sentiamo vicinissimi al nostro destino',
    buttonLabel: 'Get started',
    imgStart: false,
    img: Gatto1,
    alt: 'cane',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjSix = { //dark
    id: 'servizi',
    lightBg:false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Servizi',
    headline:'Parliamo del male, in generale',
    description: 'Di quello che abbiamo ricevuto E di quello che commettiamo noi',
    buttonLabel: 'Get started',
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
    description: 'Oltre 4 sedi in tutta italia per curare i malanni dei tuoi microamici',
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
    headline:'Molla qui il tuo accollo',
    description: 'Gli riserveremo un trattamento mediocre',
    buttonLabel: 'Prenota subito',
    imgStart: false,
    img: Gatto1,
    alt: 'cane',
    dark: false,
    primary: false,
    darkText: true
}