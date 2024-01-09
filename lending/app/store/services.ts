import {create} from "zustand";


export interface ServicesProps {
    number: string;
    header: string;
    content: string;
}

export interface ServicesStoreInterface {
    services: ServicesProps[];
}

const currentServices:ServicesProps[] = [{
    number: "1",
    header: "Психологическая поддержка",
    content: "Профессиональная помощь\n" +
        "в разрешении психологических проблем и трудностей.",
}, {
    number: "2",
    header: "Развитие личных качеств",
    content: "Улучшение эмоционального интеллекта, стрессоустойчивости\n" +
        "повышение самооценки",
}, {
    number: "3",
    header: "Работа с эмоциями",
    content: "Терапия для преодоления\n" +
        "тревожности, страхов, депрессивных состояний, обид и злости",
}, {
    number: "4",
    header: "Преодоление барьеров",
    content: "Помогаю выявить и преодолеть психологические барьеры, которые могут мешать вам в жизни.",
},]



export const useServices = create<ServicesStoreInterface>((set) => ({
    services: currentServices
}))
