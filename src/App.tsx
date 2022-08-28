import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/buttonMain/Button";
import {Main} from "./components/main/Main";
import s from './components/buttonMain/Button.module.css';
import {Screen} from "./components/screen/Screen";

function App() {

    let startValue = 0;
    let maxValue = 0;
    const [startNumControl, setStartNumControl] = useState(startValue);
    const [num, setNum] = useState(startNumControl);
    const [maxNumControl, setMaxNumControl] = useState(maxValue);
    const [disabledSet, setDisabledSet] = useState(true);
    const [textDisplay, setTextDisplay] = useState('Go bro!');

    const startButton = () => {
        if(num < maxNumControl) {
            setNum(num + 1)
        }
    };
    const resetButton = () => {
        setNum(startNumControl);
    };
    const maxStyle = num === maxNumControl || startNumControl >= maxNumControl ? s.stopBut : s.go;
    const minStyle = num === startNumControl || startNumControl >= maxNumControl ? s.stopBut : s.go;
    const setStyle = disabledSet || startNumControl >= maxNumControl? s.stop : s.go;

//SET Значений счетчика=========================================================================
    const setButton = () => {
        if(startNumControl < maxNumControl){
            setNum(startNumControl)
            setDisabledSet(true)
        }
    }

//ERROR==========================================================================================



    return (
        //SET DATA OPTIONS=======================================================================================
        <div className="App">
            <div className='block'>
                <div className='block__screen'>
                    <Screen valueType='start' title='start value:' callback={setStartNumControl} startNumControl={startNumControl} maxNumControl={maxNumControl} setDisabledSet={setDisabledSet} num={startNumControl} setTextDisplay={setTextDisplay}/>
                    <Screen valueType='max' title='max value:' callback={setMaxNumControl} startNumControl={startNumControl} maxNumControl={maxNumControl} setDisabledSet={setDisabledSet} num={maxNumControl} setTextDisplay={setTextDisplay}/>
                </div>
                <div className="block__container">
                    <Button isDisabled={startNumControl >= maxNumControl || disabledSet} style={setStyle} callback={setButton} title="set"/>
                </div>
            </div>
{/*//СЧЕТЧИК=========================================================================================================*/}
            <div className='block'>
                <Main num={num} maxNumControl={maxNumControl} startNumControl={startNumControl} textDisplay={textDisplay}/>
                <div className="block__container">
                    <Button isDisabled={num === maxNumControl || startNumControl >= maxNumControl} style={maxStyle} callback={startButton} title="inc"/>
                    <Button isDisabled={num === startNumControl || startNumControl >= maxNumControl} style={minStyle} callback={resetButton} title="reset"/>
                </div>
            </div>
        </div>
    );
}

export default App;
