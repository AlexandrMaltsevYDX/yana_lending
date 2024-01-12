import React, {ReactNode} from 'react';
import styles from './Rules.module.scss';
import {BaseWrapper} from "~shared/BaseWrapper/BaseWrapper";



export const Rules: React.FC = ({}) => {
    return (
        <BaseWrapper>
            <div className={styles.Rules__wrapper}>
                <div className={styles.Rules__h2}>Правила консультации</div>
                <div className={styles.Rules__pb}>
                    Так как мое расписание как правило очень плотно укомплектовано,
                    для оптимизации работы и удобства записи у меня работает
                    несколько правил для клиентов:
                </div>
                <div className={styles.Rules__p}>
                    Для подтверждения сессии требуется предоплата за 24 часа до
                    ее начала в размере 50% от всей стоимости, если оплата не поступила,
                    то ваше окно вывешивается автоматически в расписании
                </div>
                <div className={styles.Rules__p}>
                    Отмена сессии возможна за 24 часа до ее начала.
                    Сессия, которая была отменена менее, чем за 24 часа,
                    считается проведенной и оплачивается в размере предоплаты
                </div>
                <div className={styles.Rules__p}>
                    Если у вас случился форс-мажор или вы заболели, напишите мне,
                    чтобы мы могли с вами перенести сессию без каких-либо санкций.
                    Опоздание на сессию более чем на 20 минут без предупреждения
                    считается пропуском, такая сессия оплачивается в полном объеме
                </div>
                <div className={styles.Rules__p}>
                    За каждым постоянным клиентом закрепляется одна бесплатная
                    отмена сессии по причине форс-мажора, после отмененные сессии
                    оплачиваются по общим правилам
                </div>
                <div className={styles.Rules__p}>
                    Для проведении сессии вам необходимо комфортное
                    безопасное место и видео/аудиосвязь
                </div>
            </div>
        </BaseWrapper>
    )
}