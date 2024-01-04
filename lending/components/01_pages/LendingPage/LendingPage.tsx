'use client'
import React, {useEffect, useState} from 'react';
import {TopNav} from '~blocks/01_TopNav/TopNav';
import {FirstMain} from "~blocks/02_FirstMain/FirstMain";
import styles from "./LendingPage.module.scss"
import {useMedia} from "../../../app/store/media";


const LendingPage: React.FC = ({}) => {
    const {width: width, setValue: setValue } = useMedia()

    return (
        <div className={styles.LendingPageWrapper}>
            <TopNav/>
            <FirstMain/>
        </div>
    );
};

export {LendingPage};