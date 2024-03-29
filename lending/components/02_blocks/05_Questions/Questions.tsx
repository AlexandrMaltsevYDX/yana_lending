import React from 'react';
import {QuestionIcon, QuestionProps, useQuestions} from "../../../app/store/question";
import styles from "./Questions.module.scss"
import {BaseWrapper} from "~shared/BaseWrapper/BaseWrapper";
import {BaseIconLink} from "~shared/BaseIconLink/BaseIconLink";
import {element} from "prop-types";


export const Questions: React.FC = ({}) => {
    const {questions: questions, actionToggleState: actionToggleState} = useQuestions()

    function test(){
        console.log("test")
    }


    return (
        <BaseWrapper>
            <div className={styles.Questions}>
                <h2 className={styles.Questions_h2}>
                    Частые вопросы
                </h2>
                {questions.map((element, index) => (
                    <Question
                        key={index}
                        state={element.state}
                        header={element.header}
                        content={element.content}
                        number={element.number}
                        toggle={actionToggleState}
                    />
                ))}
            </div>
        </BaseWrapper>
    )
}

interface QuestionPropsComponent extends QuestionProps {
    toggle: (number: string) => void
}

export const Question: React.FC<QuestionPropsComponent> = ({
                                                      number,
                                                      state,
                                                      header,
                                                      content,
                                                      toggle,
                                                  }) => {
    const icon = QuestionIcon[state]
    const url = `#question_${number}`
    const id = `question_${number}`
    function onClick(){
        return toggle(number)
    }
    return (
        <div className={styles.Question}>
            <div onClick={onClick} className={styles.Question__question}>
                <div className={styles.Question__question_pb}>{header}</div>
                <BaseIconLink id={id} icon={icon} url={url} alt={state}/>
            </div>
            <div className={styles[`Question__content_${state}`]}>
                <div className={styles.Question__content_expanded_p}>{content}</div>
            </div>
        </div>
    )
}
