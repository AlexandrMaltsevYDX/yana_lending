import React from 'react';
import styles from './BaseButton.module.scss'


interface BaseButtonProps {
    variant: keyof ButtonStyles;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode;
}

interface ButtonStyles {
    base: string,
    accent: string,
    accentAppointment: string,
}

export const BaseButton: React.FC<BaseButtonProps> = ({
                                                          variant,
                                                          onClick,
                                                          children
                                                      }) => {

    const stl: ButtonStyles = {
        base: styles.button,
        accent: styles.buttonAccent,
        accentAppointment: styles.buttonAccentAppointment,
    }

    return (
        <button onClick={onClick} className={stl[variant]}>
            {children}
        </button>
    );
}
