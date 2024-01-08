import React, {ReactNode} from 'react';
import {BaseMain} from "~shared/BaseMain/BaseMain";
import styles from './SecondMain.module.scss';

interface SecondMainProps {
    children?: ReactNode;
}

export const SecondMain: React.FC<SecondMainProps> = ({children}) => {
    return (
        <BaseMain variant="left" src="/img/two.png">
            <SecondMainText/>
        </BaseMain>
    )
}


interface SecondMainTextProps {
    randomProp?: string;
}

export const SecondMainText: React.FC<SecondMainTextProps> = ({randomProp}) => {
    return (
        <React.Fragment>
            <div className={styles.SecondMainText__block_1}>
                <h2 className={styles.SecondMainText__h2}>Подход</h2>
                <div className={styles.SecondMainText__p}>
                    Когнитивно-поведенческая терапия (КПТ) —
                    доказанный метод для изменения негативных мыслей и поведения,
                    помогая преодолеть эмоциональные трудности и улучшить
                    психологическое состояние.
                </div>
            </div>
            <div className={styles.SecondMainText__block_2}>
                <h2 className={styles.SecondMainText__h2}>Образование</h2>
                <div className={styles.SecondMainText__p}>
                    Институт прикладной психологии в социальной сфере. (г.Москва)
                </div>
            </div>
        </React.Fragment>
    )
}
