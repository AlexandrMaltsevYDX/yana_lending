import React from 'react';
import {BaseMain} from "~shared/BaseMain/BaseMain";
import styles from "./FirstMain.module.scss";
import iconStyles from "./Social.module.scss";
import Link from 'next/link'
import {SocialLinkProps, SocialStoreInterface, useSocial} from "../../../app/store/socials";

interface FirstMainProps {
    children?: React.ReactNode;
}


export const FirstMain: React.FC<FirstMainProps> = ({}) => {
    return (
        <BaseMain variant="right" src="/img/one.png">
            <FirstMainText/>
        </BaseMain>
    );
}


const FirstMainText: React.FC = ({}) => {
    const {links: links} = useSocial();

    return (
        <React.Fragment>
            <h2 className={styles.FirstMainText__h2}>Консультации психолога</h2>
            <h1 className={styles.FirstMainText__h1}>Яна Ниживинская</h1>
            <div className={styles.FirstMainText__p}>
                Обращаясь ко мне, вы получите профессиональную психологическую поддержку,
                помощь в развитии личных качеств, сопровождение через кризисы
                и преодоление психологических барьеров.
            </div>
            <div className={styles.FirstMainText__pb}>
                2 года бережной поддержки клиентов
            </div>
            <SocialIconsBlock links={links}/>
        </React.Fragment>
    )
}

const SocialIcon: React.FC<SocialLinkProps> = ({icon, url, alt}) => {
    return (
        <Link href={url} prefetch={false}>
            <div className={iconStyles.Icon}>
                <img className={iconStyles.Icon} src={icon} alt={alt}/>
            </div>
        </Link>

    )
}

export const SocialIconsBlock: React.FC<SocialStoreInterface> = ({links}) => {
    return (
        <React.Fragment>
            <div className={iconStyles.SocialIconsBlock}>

            {links.map((link, index) => (
                <SocialIcon key={index} icon={link.icon} url={link.url} alt={link.alt}/>
            ))}
            </div>
        </React.Fragment>
    )
}



