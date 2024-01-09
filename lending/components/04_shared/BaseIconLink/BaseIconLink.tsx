import React from 'react';
import styles from './BaseIconLink.module.scss';
import {SocialLinkProps} from "../../../app/store/socials";
import Link from "next/link";


export const BaseIconLink: React.FC<SocialLinkProps> = ({
                                                            id,
                                                            icon,
                                                            url,
                                                            alt,
                                                            onClick
                                                        }) => {
    return (
        <Link id={id} onClick={onClick} href={url} prefetch={false}>
            <div className={styles.Icon}>
                <img className={styles.Icon} src={icon} alt={alt}/>
            </div>
        </Link>

    )
}