import React from "react";
import styles from "./Prices.module.scss";
import {BaseWrapper} from "~shared/BaseWrapper/BaseWrapper";
import {PriceProps, usePrices} from "../../../app/store/prices";


export const Prices: React.FC = ({}) => {
    const {prices: prices} = usePrices()

    return (
        <BaseWrapper>
            <div className={styles.Prices}>
                <h2 className={styles.Prices__h2}>Цены на услуги</h2>
                {prices?.map((price, index) => (
                    <Price key={index} service={price.service} content={price.content} value={price.value}/>
                ))}
            </div>
        </BaseWrapper>
    );
};


const Price: React.FC<PriceProps> = ({service, content, value}) => {
    return (
        <div className={styles.Price}>
            <div className={styles.Price__textBloc}>
                <p className={styles.Price__textBloc__pb}>{service}</p>
                <p className={styles.Price__textBloc__p}>{content}</p>
            </div>
            <div className={styles.Price__valueBlock}>
                <p className={styles.Price__valueBlock__p}>{value}</p>
            </div>
        </div>
    )
}


