import React from "react";

type ButtonType = {
    callback: () => void
    title: string
    isDisabled?:any,
    style: string,
}
export const Button = (props: ButtonType) => {


    const onClickHandler = () => {
        props.callback();
    }



    return (
        <div>
            <button disabled={props.isDisabled} className={props.style} onClick={onClickHandler}>{props.title}</button>
        </div>
    );
}