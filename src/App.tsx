import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Main} from "./components/main/Main";

function App() {

    let minValue = 0;
    let maxValue = 5;
    const [num, setNum] = useState(minValue)

    const startButton = () => {
        if (num < maxValue) {
            setNum(num + 1)
        } else {
            setNum(num)
        }
    };
    const resetButton = () => {
        setNum(minValue);
    };

    return (
        <div className="App">
            <Main num={num}/>
            <div className="container">
                <Button  isDisabled={num === maxValue} callback={()=>{startButton()}} title="inc"/>
                <Button  isDisabled={num === minValue} callback={()=>{resetButton()}} title="reset"/>
            </div>
        </div>
    );
}
export default App;
