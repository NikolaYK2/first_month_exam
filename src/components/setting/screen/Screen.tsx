import React, {ChangeEvent} from 'react';
import s from './Screen.module.css';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../redux/store";
import {setDisableAC, setTextDisplayAC} from "../../../redux/settingCounterReducer";

export type ValueType = 'max' | 'start'

type ScreenType = {
    num: number
    title: string,
    // setDisabledSet: (disabled: boolean) => void,
    valueType: ValueType,
    callback: (startNum: number, maxNum: number) => void
    // setTextDisplay: (textDisplay: string) => void,
}
export const Screen = (props: ScreenType) => {

    const dispatch = useDispatch();
    const counterStart = useAppSelector<number>((state) => state.numControl.startValue)
    const counterMax = useAppSelector<number>((state) => state.numControl.maxValue)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value
        props.callback(newValue, +props.callback);
        dispatch(setDisableAC(false))

        if (props.valueType === 'max') {
            if (newValue > counterStart && newValue > 0 && counterMax >= 0) {
                dispatch(setTextDisplayAC('Go set'))
                // props.setTextDisplay('go set');
            } else {
                dispatch(setTextDisplayAC('Error!'))

                // props.setTextDisplay('error');

            }
        } else {
            if (newValue >= counterMax || newValue < 0) {
                dispatch(setTextDisplayAC('Error!'))

            } else {
                dispatch(setTextDisplayAC('Go set'))

            }
        }
    }
    const styleErrorInput = counterStart < 0 || counterStart >= counterMax ? s.errorInp : s.defaultInp;

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

//Ну на Redux
// import React, {ChangeEvent} from 'react';
// import s from './Screen.module.css';
//
// export type ValueType = 'max' | 'start'
//
// type ScreenType = {
//     title: string,
//     num: number,
//     startNumControl: number,
//     maxNumControl: number,
//     callback: (setStartNumControl: number, setMaxNumControl: number) => void,
//     setDisabledSet: (disabled: boolean) => void,
//     setTextDisplay: (textDisplay: string) => void,
//     valueType: ValueType,
// }
// export const Screen = (props: ScreenType) => {
//
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         const newValue = +e.currentTarget.value
//         props.callback(newValue, +props.callback);
//         props.setDisabledSet(false);
//         if (props.valueType === 'max') {
//             if (newValue > props.startNumControl && newValue > 0 && props.startNumControl >= 0) {
//                 props.setTextDisplay('go set');
//             } else {
//                 props.setTextDisplay('error');
//             }
//         } else {
//             if (newValue >= props.maxNumControl || newValue < 0) {
//                 props.setTextDisplay('error');
//             } else {
//                 props.setTextDisplay('go set');
//             }
//         }
//     }
//     const styleErrorInput = props.num < 0 || props.startNumControl >= props.maxNumControl ? s.errorInp : s.defaultInp;
//
//     return (
//         <div className={s.block}>
//             {props.title}
//             <input type="number"
//                    onChange={onChangeHandler}
//                    value={props.num}
//                    className={styleErrorInput}/>
//         </div>
//     );
// };

