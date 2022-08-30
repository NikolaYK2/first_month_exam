import React, {useEffect, useState} from 'react';
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
    //Универсальный счетчик состояние одного экрана
    const [switchingSetting, setSwitchingSetting] = useState(false);
//Переключение между счетчиками=======================================================================
    const [counterSwitching, setCounterSwitching] = useState(false);

//UseEffect=======================================================================================
    //SAVE VALUE===================================================================================

    useEffect(() => {
        localStorage.setItem("numStart", JSON.stringify(startNumControl))
        localStorage.setItem("numMax", JSON.stringify(maxNumControl))
    }, [startNumControl, maxNumControl])//Принимает два параметра (callback, зависимости) - буду попадать в eseEffect каждый раз когда будет изм. зависимости
//[startNumControl,maxNumControl] - те самые зависимости которые будут меняться
//Достаем знаечния======================================================================
    let stringStart = localStorage.getItem("numStart");
    let stringMax = localStorage.getItem("numMax");

    useEffect(() => {
        if (stringStart) {//Если в переменной что-то лежит, то переводим строку обратно и сетуем значение
            let newStartNumControl = JSON.parse(stringStart)
            setStartNumControl(newStartNumControl)
        }
        if (stringMax) {
            let newMaxNumControlMax = JSON.parse(stringMax)
            setMaxNumControl(newMaxNumControlMax)
        }
    }, [])//Принимаем пустой массив зависимостей, так как отработать нужно единожды. Я хочу получить данные из LS когда мое приложение загрузится
//SVAE COUNTER======================================================================================================================
    useEffect(() => {
            localStorage.setItem('counter', JSON.stringify(counterSwitching))
        },[counterSwitching])

    let counter = localStorage.getItem('counter')
    useEffect(() => {
        if (counter) {
            let newCounterSwitching = JSON.parse(counter);
            setCounterSwitching(newCounterSwitching)
        }
    },[])
// ==================================================================================================================
    //Работа счетчика=========================================================================
    const startButton = () => {
        if(num < maxNumControl) {
            setNum(num + 1)
        }
    };
    const resetButton = () => {
        setNum(startNumControl);
    };
//==============================================================================================

//SET Значений счетчика=========================================================================
    const setButton = () => {
        if(startNumControl < maxNumControl){
            // localStorage.setItem("numStart", JSON.stringify(startNumControl))
            // localStorage.setItem("numMax", JSON.stringify(maxNumControl))
            setNum(startNumControl);
            setDisabledSet(true);
            setTextDisplay('')//после нажатия типо отключили надпись
            setSwitchingSetting(false)
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
    const settingButton = s.go;
//================================================================================================================

//LOCALSTOREGA==========================================================================================
//     const setLocalStorage = () => {
//         //сохраняем параметры счетчика / переводим в строку
//             localStorage.setItem("valueStart", JSON.stringify(startNumControl))
//             localStorage.setItem("valueMax", JSON.stringify(maxNumControl))
//     }
//
//     const getFromLocalStorage = () => {
//         //Достаем знаечния
//         let stringStart = localStorage.getItem("valueStart");
//         let stringMax = localStorage.getItem("valueMax");
//
//         if(stringStart) {//Если в переменной что-то лежит, то переводим строку обратно и сетуем значение
//             let newStartNumControl = JSON.parse(stringStart)
//             setStartNumControl(newStartNumControl)
//         }
//         if(stringMax){
//             let newMaxNumControlMax = JSON.parse(stringMax)
//             setMaxNumControl(newMaxNumControlMax)
//         }
//     }
//
//     const clearLocalS = () => {
//         //Полная очистка
//         localStorage.clear();
//         setStartNumControl(0)
//         setMaxNumControl(1)
//     }
//
//     const removeLS = () => {
//         //Удаление конкретного элемента
//         localStorage.removeItem("valueStart");
//         setStartNumControl(0)
//     }
//Кнопка переключения setting=================================================================================================
    const switchingHandler =()=>{
        setSwitchingSetting(true)
        setDisabledSet(false);
    }
//button counterSwitching===========================================================================
    const counterSwitchingHandler =()=>{
        if(!counterSwitching){
            setCounterSwitching(true)
        } else {
            setCounterSwitching(false)
        }
    }
// =======================================================================================================
    return (
        //SET DATA OPTIONS=======================================================================================
        <>
            <div className='counterSwitching'>
                <Button style={settingButton} callback={counterSwitchingHandler} title="Click"/>
            </div>
            <div className="App">
                {counterSwitching ?
                    switchingSetting ?
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
                                <Button isDisabled={disabledButtonSet} style={setStyleButton} callback={setButton}
                                        title="set"/>
                            </div>
                        </div> :

                        <div className='block'>
                            <Main num={num} maxNumControl={maxNumControl} startNumControl={startNumControl}
                                  textDisplay={textDisplay}/>
                            <div className="block__container">
                                <Button isDisabled={!disabledButtonSet || disabledButtonInc} style={incStyleButton}
                                        callback={startButton} title="inc"/>
                                <Button isDisabled={!disabledButtonSet || disabledButtonRest} style={restStyleButton}
                                        callback={resetButton} title="reset"/>
                                <Button style={settingButton} callback={switchingHandler} title="setting"/>
                            </div>
                        </div>
                    :
                    <>
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
                        </div>
                        <div className='block'>
                            <Main num={num} maxNumControl={maxNumControl} startNumControl={startNumControl} textDisplay={textDisplay}/>
                            <div className="block__container">
                                <Button isDisabled={!disabledButtonSet || disabledButtonInc} style={incStyleButton} callback={startButton} title="inc"/>
                                <Button isDisabled={!disabledButtonSet || disabledButtonRest} style={restStyleButton} callback={resetButton} title="reset"/>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default App;
