import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/buttonMain/Button";
import {Main} from "./components/main/Main";
import s from './components/buttonMain/Button.module.css';
import {Screen} from "./components/screen/Screen";

function App() {

    let startValue = 0;
    let maxValue = 1;
    const [startNumControl, setStartNumControl] = useState(startValue);
    const [num, setNum] = useState(startNumControl);
    const [maxNumControl, setMaxNumControl] = useState(maxValue);
    const [disabledSet, setDisabledSet] = useState(false);
    const [textDisplay, setTextDisplay] = useState('Go bro!');

    const startButton = () => {
        if(num < maxNumControl) {
            setNum(num + 1)
        }
    };
    const resetButton = () => {
        setNum(startNumControl);
    };

//SET Значений счетчика=========================================================================
    const setButton = () => {
        if(startNumControl < maxNumControl){
            setNum(startNumControl);
            setDisabledSet(true);
            setTextDisplay('')//после нажатия типо отключили надпись
        }
    }

    //DISABLED BUTTON=======================================================================================
    const disabledButtonInc = num === maxNumControl || startNumControl >= maxNumControl || startNumControl < 0;
    const disabledButtonRest = num === startNumControl || startNumControl >= maxNumControl || startNumControl < 0;
    const disabledButtonSet = startNumControl >= maxNumControl || startNumControl < 0 || disabledSet;
    //STYLE BUTTON=======================================================================
    const incStyleButton = !disabledSet || disabledButtonInc ? s.stopBut : s.go;
    const restStyleButton = !disabledSet || disabledButtonRest ? s.stopBut : s.go;
    const setStyleButton = disabledButtonSet ? s.stopBut : s.go;
//================================================================================================================
//LOCALSTOREGA==========================================================================================
    const setLocalStorage = () => {
        //сохраняем параметры счетчика / переводим в строку
            localStorage.setItem("valueStart", JSON.stringify(startNumControl))
            localStorage.setItem("valueMax", JSON.stringify(maxNumControl))
    }

    const getFromLocalStorage = () => {
        //Достаем знаечния
        let stringStart = localStorage.getItem("valueStart");
        let stringMax = localStorage.getItem("valueMax");

        if(stringStart) {//Если в переменной что-то лежит, то переводим строку обратно и сетуем значение
            let newStartNumControl = JSON.parse(stringStart)
            setStartNumControl(newStartNumControl)
        }
        if(stringMax){
            let newMaxNumControlMax = JSON.parse(stringMax)
            setMaxNumControl(newMaxNumControlMax)
        }
    }

    const clearLocalS = () => {
        //Полная очистка
        localStorage.clear();
        setStartNumControl(0)
        setMaxNumControl(1)
    }

    const removeLS = () => {
        //Удаление конкретного элемента
        localStorage.removeItem("valueStart");
        setStartNumControl(0)
    }

    return (
        //SET DATA OPTIONS=======================================================================================
        <div className="App">
            <div className='block'>
                <div className='block__screen'>
                    <Screen valueType='start'
                            title='start value:'
                            callback={setStartNumControl}
                            startNumControl={startNumControl}
                            maxNumControl={maxNumControl}
                            setDisabledSet={setDisabledSet}
                            num={startNumControl}
                            setTextDisplay={setTextDisplay}
                    />
                    <Screen valueType='max'
                            title='max value:'
                            callback={setMaxNumControl}
                            startNumControl={startNumControl}
                            maxNumControl={maxNumControl}
                            setDisabledSet={setDisabledSet}
                            num={maxNumControl}
                            setTextDisplay={setTextDisplay}
                    />
                </div>
                <div className="block__container">
                    <Button isDisabled={disabledButtonSet} style={setStyleButton} callback={setButton} title="set"/>
                </div>
                <button onClick={setLocalStorage}>setLS</button>
                <button onClick={getFromLocalStorage}>getFLS</button>
                <button onClick={clearLocalS}>clearLS</button>
                <button onClick={removeLS}>removeLS</button>
            </div>
{/*//СЧЕТЧИК=========================================================================================================*/}
            <div className='block'>
                <Main num={num} maxNumControl={maxNumControl} startNumControl={startNumControl} textDisplay={textDisplay}/>
                <div className="block__container">
                    <Button isDisabled={!disabledButtonSet || disabledButtonInc} style={incStyleButton} callback={startButton} title="inc"/>
                    <Button isDisabled={!disabledButtonSet || disabledButtonRest} style={restStyleButton} callback={resetButton} title="reset"/>
                </div>
            </div>
        </div>
    );
}

export default App;
