import React from 'react';
import {Main} from "./main/Main";
import {Button} from "../button/Button";
import {numPlusAC, numResetAC} from "../../redux/settingCounterReducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/store";


type DisplayType = {
    incStyleButton: string,
    restStyleButton: string,
    disabledButtonSet: boolean,
    disabledButtonInc: boolean,
    disabledButtonRest: boolean,
    counterSwitching: boolean,
    //Кнопка setting переключения
    switchingHandler: () => void,
    settingButton: string,
}
export const CountDisplay = (props: DisplayType) => {
    const dispatch = useDispatch();
    const counterNum = useAppSelector<number>((state) => state.numControl.num)
    const counterMax = useAppSelector<number>((state) => state.numControl.maxValue)
    const counterStart = useAppSelector<number>((state) => state.numControl.startValue)
    const counterText = useAppSelector<string>((state) => state.numControl.textDisplay)

    const startButton = () => {
        if (counterNum < counterMax) {
            dispatch(numPlusAC())
        }
    };
    const resetButton = () => {
        dispatch(numResetAC())
    };

    return (
        <div className='block'>
            <Main num={counterNum} counterMax={counterMax} counterStart={counterStart}
                  textDisplay={counterText}/>
            <div className="block__container">
                <Button isDisabled={!props.disabledButtonSet || props.disabledButtonInc} style={props.incStyleButton}
                        callback={startButton} title="inc"/>
                <Button isDisabled={!props.disabledButtonSet || props.disabledButtonRest} style={props.restStyleButton}
                        callback={resetButton} title="reset"/>
                {props.counterSwitching &&
                    <Button style={props.settingButton} callback={props.switchingHandler} title="setting"/>}
            </div>

        </div>
    );
};


//Не на Redux
// import React from 'react';
// import {Main} from "./main/Main";
// import {Button} from "../button/Button";
// import {ValuesType} from "../../redux/settingCounterReducer";
//
//
// type DisplayType={
//     num:ValuesType,
//     maxNumControl:number,
//     startNumControl:number,
//     textDisplay:string,
//     disabledButtonSet:boolean,
//     disabledButtonInc:boolean,
//     incStyleButton:string,
//     startButton:()=>void,
//     disabledButtonRest:boolean,
//     restStyleButton:string,
//     resetButton:()=>void,
//
//     counterSwitching:boolean,
//     //Кнопка setting переключения
//     switchingHandler:()=>void,
//     settingButton:string,
// }
// export const CountDisplay = (props:DisplayType) => {
//
//     return (
//         <div className='block'>
//             <Main num={props.num} maxNumControl={props.maxNumControl} startNumControl={props.startNumControl}
//                   textDisplay={props.textDisplay}/>
//             <div className="block__container">
//                 <Button isDisabled={!props.disabledButtonSet || props.disabledButtonInc} style={props.incStyleButton}
//                         callback={props.startButton} title="inc"/>
//                 <Button isDisabled={!props.disabledButtonSet || props.disabledButtonRest} style={props.restStyleButton}
//                         callback={props.resetButton} title="reset"/>
//                 {props.counterSwitching && <Button style={props.settingButton} callback={props.switchingHandler} title="setting"/>}
//             </div>
//
//         </div>
//     );
// };
