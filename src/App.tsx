import React, {useState} from 'react';
// import './App.css';
// import {Button} from "./components/button/Button";
// import s from './components/button/Button.module.css';
// import {CountSetting} from "./components/setting/CountSetting";
// import {CountDisplay} from "./components/display/CountDisplay";
//
// function Apps() {
//
//     let startValue = 0;
//     let maxValue = 1;
//     const [startNumControl, setStartNumControl] = useState(startValue);
//     const [num, setNum] = useState(startNumControl);
//     const [maxNumControl, setMaxNumControl] = useState(maxValue);
//     const [disabledSet, setDisabledSet] = useState(false);
//     const [textDisplay, setTextDisplay] = useState('Go bro!');
//     //Универсальный счетчик состояние одного экрана
//     const [switchingSetting, setSwitchingSetting] = useState(false);
// //Переключение между счетчиками=======================================================================
//     const [counterSwitching, setCounterSwitching] = useState(false);
//
// //UseEffect=======================================================================================
//     //SAVE VALUE===================================================================================
// //     useEffect(() => {
// //         localStorage.setItem("numStart", JSON.stringify(startNumControl))
// //         localStorage.setItem("numMax", JSON.stringify(maxNumControl))
// //     }, [startNumControl, maxNumControl])//Принимает два параметра (callback, зависимости) - буду попадать в eseEffect каждый раз когда будет изм. зависимости
// // //[startNumControl,maxNumControl] - те самые зависимости которые будут меняться
// // //Достаем знаечния======================================================================
// //     let stringStart = localStorage.getItem("numStart");
// //     let stringMax = localStorage.getItem("numMax");
// //
// //     useEffect(() => {
// //         if (stringStart) {//Если в переменной что-то лежит, то переводим строку обратно и сетуем значение
// //             let newStartNumControl = JSON.parse(stringStart)
// //             setStartNumControl(newStartNumControl)
// //         }
// //         if (stringMax) {
// //             let newMaxNumControlMax = JSON.parse(stringMax)
// //             setMaxNumControl(newMaxNumControlMax)
// //         }
// //     }, [])//Принимаем пустой массив зависимостей, так как отработать нужно единожды. Я хочу получить данные из LS когда мое приложение загрузится
// // //SVAE COUNTER======================================================================================================================
// //     useEffect(() => {
// //         localStorage.setItem('counter', JSON.stringify(counterSwitching))
// //     }, [counterSwitching])
// //
// //     let counter = localStorage.getItem('counter')
// //     useEffect(() => {
// //         if (counter) {
// //             let newCounterSwitching = JSON.parse(counter);
// //             setCounterSwitching(newCounterSwitching)
// //         }
// //     }, [])
//
// // ==================================================================================================================
//
//     //Работа счетчика=========================================================================
//     const startButton = () => {
//         // if (num < maxNumControl) {
//             setNum(num + 1)
//         // }
//     };
//     const resetButton = () => {
//         setNum(startNumControl);
//     };
//
// //==============================================================================================
//
// //SET Значений счетчика=========================================================================
//     const setButton = () => {
//         if (startNumControl < maxNumControl) {
//             // localStorage.setItem("numStart", JSON.stringify(startNumControl))
//             // localStorage.setItem("numMax", JSON.stringify(maxNumControl))
//             setNum(startNumControl);
//             setDisabledSet(true);
//             setTextDisplay('')//после нажатия типо отключили надпись
//             setSwitchingSetting(false)
//         }
//     }
//
//     //DISABLED BUTTON=======================================================================================
//     const disabledButtonInc = num === maxNumControl || startNumControl >= maxNumControl || startNumControl < 0;
//     const disabledButtonRest = num === startNumControl || startNumControl >= maxNumControl || startNumControl < 0;
//     const disabledButtonSet = startNumControl >= maxNumControl || startNumControl < 0 || disabledSet;
//     //STYLE BUTTON=======================================================================
//     const incStyleButton = !disabledSet || disabledButtonInc ? s.stopBut : s.go;
//     const restStyleButton = !disabledSet || disabledButtonRest ? s.stopBut : s.go;
//     const setStyleButton = disabledButtonSet ? s.stopBut : s.go;
//     const settingButton = s.go;
// //================================================================================================================
//
// //LOCALSTOREGA==========================================================================================
// //     const setLocalStorage = () => {
// //         //сохраняем параметры счетчика / переводим в строку
// //             localStorage.setItem("valueStart", JSON.stringify(startNumControl))
// //             localStorage.setItem("valueMax", JSON.stringify(maxNumControl))
// //     }
// //
// //     const getFromLocalStorage = () => {
// //         //Достаем знаечния
// //         let stringStart = localStorage.getItem("valueStart");
// //         let stringMax = localStorage.getItem("valueMax");
// //
// //         if(stringStart) {//Если в переменной что-то лежит, то переводим строку обратно и сетуем значение
// //             let newStartNumControl = JSON.parse(stringStart)
// //             setStartNumControl(newStartNumControl)
// //         }
// //         if(stringMax){
// //             let newMaxNumControlMax = JSON.parse(stringMax)
// //             setMaxNumControl(newMaxNumControlMax)
// //         }
// //     }
// //
// //     const clearLocalS = () => {
// //         //Полная очистка
// //         localStorage.clear();
// //         setStartNumControl(0)
// //         setMaxNumControl(1)
// //     }
// //
// //     const removeLS = () => {
// //         //Удаление конкретного элемента
// //         localStorage.removeItem("valueStart");
// //         setStartNumControl(0)
// //     }
// //==================================================================================================================
//
// //Кнопка переключения setting=================================================================================================
//     const switchingHandler = () => {
//         setSwitchingSetting(true)
//         setDisabledSet(false);
//     }
// //button counterSwitching===========================================================================
//     const counterSwitchingHandler = () => {
//         if (!counterSwitching) {
//             setCounterSwitching(true)
//         } else {
//             setCounterSwitching(false)
//         }
//     }
// // =======================================================================================================
//
//     const settingMain = <>
//         <CountSetting disabledButtonSet={disabledButtonSet}
//                  startNumControl={startNumControl}
//                  maxNumControl={maxNumControl}
//                  setStyleButton={setStyleButton}
//
//                  setStartNumControl={setStartNumControl}
//                  setMaxNumControl={setMaxNumControl}
//                  setTextDisplay={setTextDisplay}
//                  setDisabledSet={setDisabledSet}
//                  setButton={setButton}/>
//     </>
//
//     const displayMain = <>
//         <CountDisplay num={num}
//                  disabledButtonInc={disabledButtonInc}
//                  disabledButtonSet={disabledButtonSet}
//                  disabledButtonRest={disabledButtonRest}
//                  startNumControl={startNumControl}
//                  maxNumControl={maxNumControl}
//                  textDisplay={textDisplay}
//                  incStyleButton={incStyleButton}
//                  restStyleButton={restStyleButton}
//                  counterSwitching={counterSwitching}
//                  settingButton={settingButton}
//
//                  startButton={startButton}
//                  resetButton={resetButton}
//                  switchingHandler={switchingHandler}/>
//
//     </>
//     return (
//         //SET DATA OPTIONS=======================================================================================
//         <>
//             <div className='counterSwitching'>
//                 <Button style={settingButton} callback={counterSwitchingHandler} title="Click"/>
//             </div>
//             <div className="App">
//                 {counterSwitching ?
//                     switchingSetting ?
//                         <>{settingMain}</>
//                         :
//                         <>{displayMain}</>
//                     :
//                     <>
//                         {settingMain}
//                         {displayMain}
//                     </>
//                 }
//             </div>
//         </>
//     );
// }
//
// export default Apps;
