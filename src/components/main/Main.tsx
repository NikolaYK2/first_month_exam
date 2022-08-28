import React from "react";
import s from "./Main.module.css";

type MainType = {
    num: number,
    startNumControl: number,
    maxNumControl: number,
    textDisplay: string,

}

export const Main = (props: MainType) => {


    const stopNum = props.num === props.maxNumControl ? s.stop : "";
    const display = props.num || props.textDisplay;

    return (
        <div className={s.container__meaning}>
            <h1 className={stopNum}>{display}</h1>
        </div>
    );
}