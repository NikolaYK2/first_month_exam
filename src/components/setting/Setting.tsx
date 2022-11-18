import React from 'react';
import {Screen} from "./screen/Screen";
import {Button} from "../button/Button";


type SettingType={
    setStartNumControl:(startNumControl:number)=>void,
    setMaxNumControl:(maxNumControl:number)=>void,
    startNumControl:number,
    maxNumControl:number,
    setDisabledSet:(disabledSet:boolean)=>void,
    setTextDisplay:(textDisplay:string)=>void,
    disabledButtonSet:boolean,
    setStyleButton:string,
    setButton:()=>void,


}


export const Setting = (props:SettingType) => {
    return (
        <div className='block'>
            <div className='block__screen'>
                <Screen valueType='start'
                        title='start value:'
                        callback={props.setStartNumControl}
                        startNumControl={props.startNumControl}
                        maxNumControl={props.maxNumControl}
                        setDisabledSet={props.setDisabledSet}
                        num={props.startNumControl}
                        setTextDisplay={props.setTextDisplay}
                />
                <Screen valueType='max'
                        title='max value:'
                        callback={props.setMaxNumControl}
                        startNumControl={props.startNumControl}
                        maxNumControl={props.maxNumControl}
                        setDisabledSet={props.setDisabledSet}
                        num={props.maxNumControl}
                        setTextDisplay={props.setTextDisplay}
                />
            </div>

            <div className="block__container">
                <Button isDisabled={props.disabledButtonSet} style={props.setStyleButton} callback={props.setButton}
                        title="set"/>
            </div>
        </div>
    );
};
