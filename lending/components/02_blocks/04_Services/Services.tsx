import React, {ReactNode} from 'react';
import styles from './Services.module.scss';
import {BaseWrapper} from "~shared/BaseWrapper/BaseWrapper";
import {BaseIconLink} from "~shared/BaseIconLink/BaseIconLink";


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
                <ServiceButton
                    icon="/svg/arrow.svg"
                    url="https://yana-lending.vercel.app/"
                    alt="Запись на консультацию"
                />
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

export interface ServiceButtonProps {
    icon: string;
    url: string;
    alt: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({icon, url, alt}) => {
    return (
        <div className={styles.ServicesGrid__Cell_Button}>
            <div className={styles.ServiceText__pb}>Записаться на консультацию</div>
            <BaseIconLink icon={icon} url={url} alt={alt}/>
        </div>
    )
}
