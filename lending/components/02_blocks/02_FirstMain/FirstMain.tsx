import React from 'react';
import {BaseWrapper} from "~shared/BaseWrapper/BaseWrapper";
import styles from "./FirstMain.module.scss";
import {BaseMain} from "~shared/BaseMain/BaseMain";


interface FirstMainProps {
    children?: React.ReactNode;
}


export const FirstMain: React.FC<FirstMainProps> = ({}) => {
    return (
        <BaseMain variant="left" src="/img/one.png"/>
    );
}
