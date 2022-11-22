import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
import s from './components/button/Button.module.css';
import {CountSetting} from "./components/setting/CountSetting";
import {CountDisplay} from "./components/display/CountDisplay";
import {useDispatch} from "react-redux";
import {setDisableAC} from "./redux/settingCounterReducer";
import {useAppSelector} from "./redux/store";


function AppRedux() {

    const dispatch = useDispatch();
    const counterNum = useAppSelector<number>((state) => state.numControl.num)
    const counterStart = useAppSelector<number>((state) => state.numControl.startValue)
    const counterMax = useAppSelector<number>((state) => state.numControl.maxValue)
    const countDisable = useAppSelector<boolean>((state) => state.numControl.disabledSet)
    //Универсальный счетчик состояние одного экрана
    const [switchingSetting, setSwitchingSetting] = useState(false);
//Переключение между счетчиками=======================================================================
    const [counterSwitching, setCounterSwitching] = useState(false);

//SAVE COUNTER and COUNTER-SETTING======================================================================================================================
    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counterSwitching))
        localStorage.setItem('counterSetting', JSON.stringify(switchingSetting))
    }, [counterSwitching,switchingSetting])

    let counter = localStorage.getItem('counter')
    let counterSetting = localStorage.getItem('counterSetting')
    useEffect(() => {
        let newCounterSwitching = counter ? JSON.parse(counter) : undefined;
        setCounterSwitching(newCounterSwitching)

        let newSwitchingSetting = counterSetting ? JSON.parse(counterSetting) : undefined;
        setSwitchingSetting(newSwitchingSetting)
        // if (counter) {
        //     let newCounterSwitching = JSON.parse(counter);
        //     setCounterSwitching(newCounterSwitching)
        // }
    }, [])

    //DISABLED BUTTON=======================================================================================
    const disabledButtonInc = counterNum === counterMax || counterStart >= counterMax || counterStart < 0;
    const disabledButtonRest = counterNum === counterStart || counterStart >= counterMax || counterStart < 0;
    const disabledButtonSet = counterStart >= counterMax || counterStart < 0 || countDisable;
    //STYLE BUTTON=======================================================================
    const setStyleButton = disabledButtonSet ? s.stopBut : s.go;
    const incStyleButton = !countDisable || disabledButtonInc ? s.stopBut : s.go;
    const restStyleButton = !countDisable || disabledButtonRest ? s.stopBut : s.go;
    const settingButton = s.go;
//================================================================================================================


//Кнопка переключения setting=================================================================================================
    const switchingHandler = () => {
        setSwitchingSetting(true)
        dispatch(setDisableAC(false));
    }
//button counterSwitching===========================================================================
    const counterSwitchingHandler = () => {
        if (!counterSwitching) {
            setCounterSwitching(true)
        } else {
            setCounterSwitching(false)
        }
    }
// =======================================================================================================

    const settingMain = <>
        <CountSetting disabledButtonSet={disabledButtonSet}
                      setStyleButton={setStyleButton}

                      setSwitchingSetting={setSwitchingSetting}
        />
    </>

    const displayMain = <>
        <CountDisplay
            disabledButtonInc={disabledButtonInc}
            disabledButtonSet={disabledButtonSet}
            disabledButtonRest={disabledButtonRest}
            incStyleButton={incStyleButton}
            restStyleButton={restStyleButton}
            settingButton={settingButton}
            counterSwitching={counterSwitching}

            switchingHandler={switchingHandler}/>

    </>
    return (
        //SET DATA OPTIONS=======================================================================================
        <>
            <div className='counterSwitching'>
                <Button style={settingButton} callback={counterSwitchingHandler} title="Click"/>
            </div>
            <div className="App">
                {counterSwitching ?
                    switchingSetting ?
                        <>{settingMain}</>
                        :
                        <>{displayMain}</>
                    :
                    <>
                        {settingMain}
                        {displayMain}
                    </>
                }
            </div>
        </>
    );
}

export default AppRedux;
