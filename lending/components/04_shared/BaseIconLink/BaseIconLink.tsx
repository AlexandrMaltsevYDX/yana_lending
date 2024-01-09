import React, {ReactNode} from 'react';
import styles from './BaseIconLink.module.scss';
import {SocialLinkProps} from "../../../app/store/socials";
import Link from "next/link";


export const BaseIconLink: React.FC<SocialLinkProps> = ({icon, url, alt}) => {
    return (
        <Link href={url} prefetch={false}>
            <div className={styles.Icon}>
                <img className={styles.Icon} src={icon} alt={alt}/>
            </div>
        </Link>

    )
}