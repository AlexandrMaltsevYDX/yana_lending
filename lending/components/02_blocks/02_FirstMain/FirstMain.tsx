import React from 'react';
import {BaseMain} from "~shared/BaseMain/BaseMain";
import styles from "./FirstMain.module.scss";


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
    return (
    <React.Fragment>
        <h2 className={styles.FirstMainText__h2}>Консультации психолога</h2>
        <h1 className={styles.FirstMainText__h1}>Яна Ниживинская</h1>
        <div className={styles.FirstMainText__p} >
            Обращаясь ко мне, вы получите профессиональную психологическую поддержку,
            помощь в развитии личных качеств, сопровождение через кризисы
            и преодоление психологических барьеров.
        </div>
        <div className={styles.FirstMainText__pb} >
            2 года бережной поддержки клиентов
        </div>
    </React.Fragment>
    )
}

