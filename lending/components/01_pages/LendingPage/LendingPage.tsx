'use client'
import React, {useEffect, useState} from 'react';
import {TopNav} from '~blocks/01_TopNav/TopNav';
import {FirstMain} from "~blocks/02_FirstMain/FirstMain";
import styles from "./LendingPage.module.scss"
import {SecondMain} from "~blocks/03_SecondMain/SecondMain";
import {Services} from "~blocks/04_Services/Services";


const LendingPage: React.FC = ({}) => {
    return (
        <div className={styles.LendingPageWrapper}>
            <TopNav/>
            <FirstMain/>
            <SecondMain/>
            <Services/>
        </div>
    );
};

export {LendingPage};