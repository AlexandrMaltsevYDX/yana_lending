"use client"
import styles from './page.module.scss'
import {LendingPage} from '~pages/index'
// change this


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
