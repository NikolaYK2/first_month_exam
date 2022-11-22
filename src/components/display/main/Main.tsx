import React from "react";
import s from "./Main.module.css";

type MainType = {
    num: number,
    counterMax: number,
    counterStart: number,
    textDisplay: string,
}

export const Main = (props: MainType) => {

    const stopNumStyle = props.num === props.counterMax && props.counterMax !== 0 ? s.stop : '';
    const stopTextStyle = props.counterMax <= props.counterStart || props.counterStart < 0 ? s.stop : '';

    const display = props.textDisplay ? props.textDisplay : props.num;

    return (
        <div className={s.container__meaning}>
            <h1 className={`${s.main} ${props.textDisplay ? stopTextStyle : '' || props.num ? stopNumStyle : ''}`}>{display}</h1>
        </div>
    );
}

