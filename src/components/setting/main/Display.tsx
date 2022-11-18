import React from 'react';
import {Main} from "./display/Main";
import {Button} from "../../button/Button";


type DisplayType={
    num:number,
    maxNumControl:number,
    startNumControl:number,
    textDisplay:string,
    disabledButtonSet:boolean,
    disabledButtonInc:boolean,
    incStyleButton:string,
    startButton:()=>void,
    disabledButtonRest:boolean,
    restStyleButton:string,
    resetButton:()=>void,

    counterSwitching:boolean,
    //Кнопка setting переключения
    switchingHandler:()=>void,
    settingButton:string,
}
export const Display = (props:DisplayType) => {

    return (
        <div className='block'>
            <Main num={props.num} maxNumControl={props.maxNumControl} startNumControl={props.startNumControl}
                  textDisplay={props.textDisplay}/>
            <div className="block__container">
                <Button isDisabled={!props.disabledButtonSet || props.disabledButtonInc} style={props.incStyleButton}
                        callback={props.startButton} title="inc"/>
                <Button isDisabled={!props.disabledButtonSet || props.disabledButtonRest} style={props.restStyleButton}
                        callback={props.resetButton} title="reset"/>
                {props.counterSwitching && <Button style={props.settingButton} callback={props.switchingHandler} title="setting"/>}
            </div>

        </div>
    );
};
