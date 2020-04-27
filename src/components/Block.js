import React, { useState, useEffect, useRef } from 'react'

const Block = (props) => {
    let [arr, setArr] = useState([])
    let [colors, setColors] = useState([])

    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    useEffect(() => {
        setArr(Array.from({length: 16}, (el, i) => i + 1))
        let arr1 = []
        for (let i = 0; i < arr.length ; i+= 2) {
            let elem = '#' + Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, 0);
            arr1.push(elem);
            arr1.push(elem);
        }
        shuffle(arr1);
        setColors(arr1)
    }, [arr.length])

    return (
        <div className='block'>
            {arr.map((el, i) => <div className='block-child' key={`key${el}`}>
                                <div data-item={i} ref={(elem) => props.reff[i] = elem} style={{backgroundColor: colors[i]}} onClick={props.getOpacity} className="block-item"></div>
                            </div>)}
        </div>
    )
}

export default Block