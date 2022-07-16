import React from "react";
import s from "./Button.module.css";

type ButtonType = {
    callback: () => void
    title: string
    isDisabled: boolean,
}
export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callback();
    }

    return (
        <div className={s.container__button}>
            <button disabled={props.isDisabled} onClick={onClickHandler} >{props.title}</button>
        </div>
    );
}