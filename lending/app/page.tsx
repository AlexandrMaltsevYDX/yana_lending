"use client"
import styles from './page.module.scss'
import {LendingPage} from '~pages/index'
import {useMedia} from "./store/socials";
import {useEffect} from "react";

interface Breakpoints {
    [key: string]: Array<number>;
}

export default function Home() {
    return (
        <div className={styles.Page}>
            <LendingPage/>
        </div>
    )
}
