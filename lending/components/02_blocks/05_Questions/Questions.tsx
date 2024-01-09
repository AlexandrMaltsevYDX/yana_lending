import React, {ReactNode} from 'react';
import styles from './Questions.module.scss';

interface QuestionsProps {
    children?: ReactNode;
}

export const Questions: React.FC<QuestionsProps> = ({children}) => {
    return (
    <div>{children}</div>
    )
}
