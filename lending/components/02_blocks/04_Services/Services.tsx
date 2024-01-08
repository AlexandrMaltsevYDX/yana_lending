import React, {ReactNode} from 'react';
import styles from './Services.module.scss';
import Link from "next/link";
import {BaseWrapper} from "~shared/BaseWrapper/BaseWrapper";


interface ServicesProps {
    children?: ReactNode;
}

export const Services: React.FC<ServicesProps> = ({children}) => {
    const services = ["1", "2", "3", "4"]

    return (
        <BaseWrapper>
            <div className={styles.ServicesGrid}>
                <h2 className={styles.ServicesGrid__Cell_h2}>
                    Консультации психолога
                </h2>
                {services.map((service, index) => (
                    <Service key={index} number={service}/>
                ))}
            </div>
        </BaseWrapper>
    )
}


interface ServiceProps {
    number?: string;
}

const Service: React.FC<ServiceProps> = ({number}) => {
    return (
        <div className={styles[`ServicesGrid__Cell_${number}`]}>
            <div className={styles.ServiceText__pb}>Заголовок заг</div>
            <div className={styles.ServiceText__p}>
                Когнитивно-поведенческая терапия (КПТ) —
                доказанный метод для изменения негативных
                психологическое состояние.
                психологическое состояние.
            </div>
        </div>
    )
}


const ServiceButton: React.FC<ServiceProps> = ({}) => {
    return (
        <React.Fragment>
            <div className={styles.ServiceText__pb}>Заголовок заг</div>
        </React.Fragment>
    )
}

export interface ServiceLinkProps {
    icon: string;
    url: string;
    alt: string;
}

const ServiceIcon: React.FC<ServiceLinkProps> = ({icon, url, alt}) => {
    return (
        <Link href={url} prefetch={false}>
            <div className={styles.Icon}>
                <img className={styles.Icon} src={icon} alt={alt}/>
            </div>
        </Link>

    )
}