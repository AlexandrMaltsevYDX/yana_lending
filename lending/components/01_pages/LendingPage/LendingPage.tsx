'use client'
import React, {useEffect, useState} from 'react';
import {TopNav} from '~blocks/01_TopNav/TopNav';
import {FirstMain} from "~blocks/02_FirstMain/FirstMain";
import styles from "./LendingPage.module.scss"
import {SecondMain} from "~blocks/03_SecondMain/SecondMain";
import {Services} from "~blocks/04_Services/Services";
import {Questions} from "~blocks/05_Questions/Questions";
import {Result} from "postcss";
import {Rules} from "~blocks/06_Rules/Rules";
import {Prices} from "~blocks/07_Prices/Prices";


const LendingPage: React.FC = ({}) => {
    return (
        <div className={styles.LendingPageWrapper}>
            <TopNav/>
            <FirstMain/>
            <SecondMain/>
            <Services/>
            <Questions/>
            <Rules/>
            <Prices/>
        </div>
    );
};

export {LendingPage};