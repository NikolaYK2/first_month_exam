import React from "react";
import s from "./Main.module.css";

type MainType = {
    num: number
}

export const Main = (props: MainType) => {

    let stopNum = props.num === 5 ? s.stop : "";

    return (
        <div className={s.container__meaning}>
            <h1 className={stopNum}>{props.num}</h1>
        </div>
    );
}