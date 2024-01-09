'use client'
import React, {useState} from 'react';
import {BaseButton} from "~shared/BaseButton/BaseButton";
import styles from "./TopNav.module.scss"


export const TopNav: React.FC = ({}) => {
    const rightGroupData = [];
    const leftGroupData = [];

    return (
        <div className={styles.TopNav}>
            <LeftGroup/>
            <RightGroup/>
        </div>
    );
};


const LeftGroup: React.FC = ({}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    function toggleExpanded(){
        setIsExpanded(!isExpanded)
    }

    return (
        <>
            <div className={styles.Group__left}>
                <BaseButton variant="base">Обо Мне</BaseButton>
                <BaseButton variant="base">Услуги</BaseButton>
                <BaseButton variant="base">Запись</BaseButton>
                <BaseButton variant="base">Вопросы</BaseButton>
                <BaseButton variant="base">Правила консультации</BaseButton>
                <BaseButton variant="base">Записаться</BaseButton>
                <BaseButton variant="base">Контакты</BaseButton>
            </div>
            <div className={styles.Group__left_norrow}>
                <BaseButton onClick={toggleExpanded} variant="base">Меню</BaseButton>
                <DropDownMenu isExpanded={isExpanded}></DropDownMenu>
            </div>
        </>
    );
};

interface DropDownMenuProps{
    isExpanded: boolean
}
const DropDownMenu: React.FC<DropDownMenuProps> = ({isExpanded}) => {
    return (
            <div className={isExpanded ? styles.DropDown_expanded : styles.DropDown_colapsed}>
                <BaseButton variant="base">Обо Мне</BaseButton>
                <BaseButton variant="base">Услуги</BaseButton>
                <BaseButton variant="base">Запись</BaseButton>
                <BaseButton variant="base">Вопросы</BaseButton>
                <BaseButton variant="base">Правила консультации</BaseButton>
                <BaseButton variant="base">Записаться</BaseButton>
                <BaseButton variant="base">Контакты</BaseButton>
            </div>
    );
};


const RightGroup: React.FC = ({}) => {
    return (
        <div className={styles.Group__right}>
            <BaseButton variant="accentAppointment">Консультация</BaseButton>
        </div>
    );
};



















