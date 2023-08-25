import React, { useState } from 'react'


const Calculator = () => {

    const [item, setItem] = useState(0);
    const [value, setValue] = useState(0);
    const [control, setControl] = useState('');

    const itemFunc = (e) => {
        if (typeof item === 'number') setItem(e.target.innerText)
        else setItem(item + e.target.innerText)
    }

    const controlFunc = (e) => {
        setValue(+item)
        setControl(e.target.innerText)
        setItem(+item)
    }

    const resultFunc = () => {
        let itemValue = +item;
        if (control === '+') {
            let result = value + itemValue
            return setItem(result)
        } else if (control === '-') {
            let result = value - itemValue
            return setItem(result)
        } else if (control === '/') {
            let result = value / itemValue
            return setItem(result)
        } else if (control === 'x') {
            let result = value * itemValue
            return setItem(result)
        }
    }


    return (
        <div className="content">
            <div className='controls control_c' onClick={() => setItem(0)}>C</div>
            <div className='result'><p>{item}</p></div>
            <div className='numbers' onClick={(e) => itemFunc(e)}>7</div>
            <div className='numbers' onClick={(e) => itemFunc(e)}>8</div>
            <div className='numbers' onClick={(e) => itemFunc(e)}>9</div>
            <div className='controls' onClick={(e) => controlFunc(e)}>+</div>
            <div className='numbers' onClick={(e) => itemFunc(e)}>4</div>
            <div className='numbers' onClick={(e) => itemFunc(e)}>5</div>
            <div className='numbers' onClick={(e) => itemFunc(e)}>6</div>
            <div className='controls' onClick={(e) => controlFunc(e)}>-</div>
            <div className='numbers' onClick={(e) => itemFunc(e)}>1</div>
            <div className='numbers' onClick={(e) => itemFunc(e)}>2</div>
            <div className='numbers' onClick={(e) => itemFunc(e)}>3</div>
            <div className='controls' onClick={(e) => controlFunc(e)}>/</div>
            <div className='numbers' onClick={(e) => itemFunc(e)}>0</div>
            <div className='numbers' onClick={(e) => itemFunc(e)}>.</div>
            <div className='controls control_equal' onClick={() => resultFunc()}>=</div>
            <div className='controls' onClick={(e) => controlFunc(e)}>x</div>
        </div>
    )
}

export default Calculator