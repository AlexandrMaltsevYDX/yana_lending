import React from 'react';
import {BaseWrapper} from "~shared/BaseWrapper/BaseWrapper";
import styles from "./BaseMain.module.scss";


interface BaseMainProps {
    variant: "right" | "left";
    src: string;
    children?: React.ReactNode;
}


export const BaseMain: React.FC<BaseMainProps> = ({variant, src, children}) => {
    return (
        <BaseWrapper>
            <div className={styles[`BaseMain_${variant}`]}>
                <div className={styles.GridCell__left}>
                    {variant === "left" ? <PhotoBlock src={src}/> : <TextBlock>{children}</TextBlock>}
                </div>
                <div className={styles.GridCell__right}>
                    {variant === "left" ? <TextBlock>{children}</TextBlock> : <PhotoBlock src={src}/>}
                </div>
            </div>
        </BaseWrapper>

    );
}

interface TextBlockProps{
    children?: React.ReactNode;
}

const TextBlock: React.FC<TextBlockProps> = ({children}) => {
    return (
        <div className={styles.ContentBlock__text}>
            {children}
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
