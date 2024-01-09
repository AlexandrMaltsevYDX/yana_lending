import React, {ReactNode} from 'react';
import styles from './Services.module.scss';
import {BaseWrapper} from "~shared/BaseWrapper/BaseWrapper";
import {BaseIconLink} from "~shared/BaseIconLink/BaseIconLink";
import {useServices, ServicesProps} from "../../../app/store/services";




export const Services: React.FC = ({}) => {
    const {services: services} = useServices()
    return (
        <BaseWrapper>
            <div className={styles.ServicesGrid}>
                <h2 className={styles.ServicesGrid__Cell_h2}>
                    Консультации психолога
                </h2>
                {services.map((service, index) => (
                    <Service key={index} number={service.number} header={service.header} content={service.content}/>
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




const Service: React.FC<ServicesProps> = ({number, header, content}) => {
    return (
        <div className={styles[`ServicesGrid__Cell_${number}`]}>
            <div className={styles.ServiceText__pb}>{header}</div>
            <div className={styles.ServiceText__p}>
                {content}
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
