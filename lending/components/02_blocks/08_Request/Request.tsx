import React, {ReactNode} from 'react';
import styles from './Request.module.scss';
import {BaseIconLink} from "~shared/BaseIconLink/BaseIconLink";
import {SocialLinkProps, useSocial} from "../../../app/store/socials";

interface RequestProps {
    children?: ReactNode;
}

export const Request: React.FC<RequestProps> = ({children}) => {
    const {links: links} = useSocial()

    return (


        <div className={styles.Request}>
            <div className={styles.Request_h2}>Записаться на консультацию</div>
            <div className={styles.Request_socials}>
                {links?.map((social, index) => (
                    <RequestSocials key={index} icon={social.icon} url={social.url} alt={social.alt}/>
                ))}
            </div>
        </div>

    )
}


export const RequestSocials: React.FC<SocialLinkProps> = ({icon, url, alt}) => {
    return (
        <div className={styles.RequestSocials}>
            <BaseIconLink icon={icon} url={url} alt={alt}/>
            <div>{alt}:</div>
            <div>{url}</div>
        </div>
    )
}
