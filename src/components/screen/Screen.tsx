import React, {ChangeEvent, useState} from 'react';
import s from './Screen.module.css';

export type ValueType = 'max' | 'start'

type ScreenType = {
    title: string,
    num: number,
    startNumControl: number,
    maxNumControl: number,
    callback: (setStartNumControl: number, setMaxNumControl: number) => void,
    setDisabledSet: (disabled: boolean) => void,
    setTextDisplay: (textDisplay: string) => void,
    valueType: ValueType,
}
export const Screen = (props: ScreenType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value
        props.callback(newValue, +props.callback);
        props.setDisabledSet(false);
        if (props.valueType === 'max') {
            if (newValue > props.startNumControl && newValue > 0 && props.startNumControl >= 0) {
                props.setTextDisplay('go set');
            } else {
                props.setTextDisplay('error');
            }
        } else {
            if (newValue >= props.maxNumControl || newValue < 0) {
                props.setTextDisplay('error');
            } else {
                props.setTextDisplay('go set');
            }
        }
    }
    const styleErrorInput = props.num < 0 || props.startNumControl >= props.maxNumControl ? s.errorInp : s.defaultInp;

    return (
        <div className={s.block}>
            {props.title}
            <input type="number"
                   onChange={onChangeHandler}
                   value={props.num}
                   className={styleErrorInput}/>
        </div>
    );
};

