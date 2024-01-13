import {create} from "zustand";


export interface PriceProps {
    service?: string;
    content?: string;
    value?: string;
}

export interface PriceStoreInterface {
    prices: PriceProps[];
}

const currentProps: PriceProps[] = [{
    service: "Психологическая поддержка",
    content: "Профессиональная помощь в разрешении психологических проблем и трудностей.",
    value: "5 000 ₽ / 60 мин."
}, {
    service: "Развитие личных качеств",
    content: "Улучшение эмоционального интеллекта, стрессоустойчивости повышение самооценки",
    value: "5 000 ₽ / 60 мин."
}, {
    service: "Преодоление барьеров",
    content: "Помогаю выявить и преодолеть психологические барьеры, которые могут мешать вам в жизни.",
    value: "5 000 ₽ / 60 мин."
},]


export const usePrices = create<PriceStoreInterface>((set) => ({
    prices: currentProps
}))
