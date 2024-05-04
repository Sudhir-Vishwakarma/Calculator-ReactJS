import React from "react";
import { useState } from "react";
import "./app.css";

function App(){

    const [result, setResult] = useState('');
    const [input, setInput] = useState('');

    const handler = (e)=>{
        setInput(input.concat(e.target.name));
    }
    const handle = (e)=>{
        setInput(input.concat(e.target.name));
    }

    const clear = ()=>{
        setInput('');
        setResult('');
    }
    const backspace = ()=>{
        setInput(input.slice(0, -1));
        setResult(result.slice(0, -1));
    }
    const equal = ()=>{
        try{
            setResult(eval(input.toString()));
            setInput(' ');
        }catch(err){
            alert("Invalid Expression")
        }
    }

    return(
        <>
            <div className="main-container">    
                <div className="calculator">
                    <div className="input-container">
                        <input  type="text" className="input-result" value={result} onChange={(e)=>(setResult(e.target.value))} placeholder="result"/>
                        <input  type="text" className="input-value" value={input} onChange={(e)=>(setInput(e.target.value))} placeholder="input"/>
                    </div>
                    <div className="keypad">
                        <div className="key-container">
                            <button onClick={clear}>AC</button>
                            <button onClick={backspace}>C</button>
                            <button name="%" onClick={handle}>%</button>
                            <button name="/" onClick={handle}>/</button>
                            <button name="7" onClick={handler}>7</button>
                            <button name="8" onClick={handler}>8</button>
                            <button name="9" onClick={handler}>9</button>
                            <button name="×" onClick={handle}>×</button>
                            <button name="4" onClick={handler}>4</button>
                            <button name="5" onClick={handler}>5</button>
                            <button name="6" onClick={handler}>6</button>
                            <button name="-" onClick={handle}>-</button>
                            <button name="1" onClick={handler}>1</button>
                            <button name="2" onClick={handler}>2</button>
                            <button name="3" onClick={handler}>3</button>
                            <button name="+" onClick={handle}>+</button>
                            <button name="0" onClick={handler}>0</button>
                            <button name="." onClick={handle}>.</button>
                            <button onClick={equal} className="equal">=</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default App;