import React from "react";
import styles from "./BaseWrapper.module.scss";


interface BaseWrapperProps {
    children?: React.ReactNode;
}


export const BaseWrapper: React.FC<BaseWrapperProps> = ({children}) => {
    return (
        <div className={styles.BaseWrapper}>
            {children}
        </div>
    );
}
