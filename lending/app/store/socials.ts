import {create} from "zustand";


export interface SocialLinkProps {
    icon: string;
    url: string;
    alt: string;
}

export interface SocialStoreInterface {
    links: SocialLinkProps[];
}

const currentLinks:SocialLinkProps[] = [{
        icon: "/svg/whatsap.svg",
        url: "https://www.youtube.com/watch?v=vvGTc3LJtVQ",
        alt: "whatsap"
    }, {
        icon: "/svg/telegram.svg",
        url: "https://www.youtube.com/watch?v=vvGTc3LJtVQ",
        alt: "telegram"
    }, {
        icon: "/svg/instagram.svg",
        url: "https://www.youtube.com/watch?v=vvGTc3LJtVQ",
        alt: "instagram"
    },]



export const useSocial = create<SocialStoreInterface>((set) => ({
    links: currentLinks
}))


