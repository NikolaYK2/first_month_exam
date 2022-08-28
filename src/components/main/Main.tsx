import React from "react";
import s from "./Main.module.css";

type MainType = {
    num: number,
    startNumControl: number,
    maxNumControl: number,
    textDisplay: string,
}

export const Main = (props: MainType) => {

    const stopNumStyle = props.num === props.maxNumControl && props.maxNumControl !== 0 ? s.stop : '';
    const stopTextStyle = props.maxNumControl <= props.startNumControl ? s.stop : '';

    const display = props.textDisplay ? props.textDisplay : props.num;

    return (
        <div className={s.container__meaning}>
            <h1 className={`${s.main} ${props.textDisplay ? stopTextStyle : '' || props.num ? stopNumStyle : ''}`}>{display}</h1>
        </div>
    );
}