import React from 'react';
import {Screen} from "./screen/Screen";
import {Button} from "../button/Button";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/store";
import {setDisableAC, setMaxAC, setNumAC, setStartAC, setTextDisplayAC} from "../../redux/settingCounterReducer";


type SettingType = {
    disabledButtonSet: boolean,
    setStyleButton: string,
    setSwitchingSetting: (switching: boolean) => void,
    // setDisabledSet: (disabled: boolean) => void,
    // setTextDisplay:(textDisplay:string)=>void,


}


export const CountSetting = (props: SettingType) => {
    const dispatch = useDispatch();
    const counterStart = useAppSelector<number>((state) => state.numControl.startValue)
    const counterMax = useAppSelector<number>((state) => state.numControl.maxValue)


    const setButton = () => {
        if (counterStart < counterMax) {
            dispatch(setNumAC(counterStart))
            dispatch(setDisableAC(true));
            dispatch(setTextDisplayAC(''))
            props.setSwitchingSetting(false)
        }
    }
    const start = (startNum:number) => {
        dispatch(setStartAC(startNum))
    }
    const max = (maxNum:number) => {
        dispatch(setMaxAC(maxNum))
    }
    return (
        <div className='block'>
            <div className='block__screen'>
                <Screen valueType='start' title='start value:' callback={start} num={counterStart}/>
                <Screen valueType='max' title='max value:' callback={max} num={counterMax}/>
            </div>

            <div className="block__container">
                <Button isDisabled={props.disabledButtonSet} style={props.setStyleButton} callback={setButton} title="set"/>
            </div>
        </div>
    );
};


//Не на Redux
// import React from 'react';
// import {Screen} from "./screen/Screen";
// import {Button} from "../button/Button";
//
//
// type SettingType={
//     setStartNumControl:(startNumControl:number)=>void,
//     setMaxNumControl:(maxNumControl:number)=>void,
//     startNumControl:number,
//     maxNumControl:number,
//     setDisabledSet:(disabledSet:boolean)=>void,
//     setTextDisplay:(textDisplay:string)=>void,
//     disabledButtonSet:boolean,
//     setStyleButton:string,
//     setButton:()=>void,
//
//
// }
//
//
// export const CountSetting = (props:SettingType) => {
//     return (
//         <div className='block'>
//             <div className='block__screen'>
//                 <Screen valueType='start'
//                         title='start value:'
//                         callback={props.setStartNumControl}
//                         startNumControl={props.startNumControl}
//                         maxNumControl={props.maxNumControl}
//                         setDisabledSet={props.setDisabledSet}
//                         num={props.startNumControl}
//                         setTextDisplay={props.setTextDisplay}
//                 />
//                 <Screen valueType='max'
//                         title='max value:'
//                         callback={props.setMaxNumControl}
//                         startNumControl={props.startNumControl}
//                         maxNumControl={props.maxNumControl}
//                         setDisabledSet={props.setDisabledSet}
//                         num={props.maxNumControl}
//                         setTextDisplay={props.setTextDisplay}
//                 />
//             </div>
//
//             <div className="block__container">
//                 <Button isDisabled={props.disabledButtonSet} style={props.setStyleButton} callback={props.setButton}
//                         title="set"/>
//             </div>
//         </div>
//     );
// };
