import React from 'react';
import {BaseWrapper} from "~shared/BaseWrapper/BaseWrapper";
import styles from "./BaseMain.module.scss";


interface BaseMainProps {
    variant: "right" | "left";
    src: string;
}


export const BaseMain: React.FC<BaseMainProps> = ({variant, src}) => {
    return (
        <BaseWrapper>
            <div className={styles[`BaseMain_${variant}`]}>
                <div className={styles.GridCell__left}>
                    {variant === "left" ? <PhotoBlock src={src}/> : <TextBlock/>}
                </div>
                <div className={styles.GridCell__right}>
                    {variant === "left" ? <TextBlock/> : <PhotoBlock src={src}/>}
                </div>
            </div>
        </BaseWrapper>

    );
}

const TextBlock: React.FC = ({}) => {
    return (
        <div className={styles.ContentBlock__text}>
            Text
        </div>
    )
}

interface PhotoBlockProps{
    src: string;
}

const PhotoBlock: React.FC<PhotoBlockProps> = ({src}) => {
    return (
        <div className={styles.ContentBlock__photo}>
            <img src={src}/>
        </div>
    )
}
