import React, { useContext, useState, useEffect, useRef } from 'react' 
import { Context } from '../resReducer'
import Block from './Block'

const Game = (props) => {
    let [refs, setRefs] = useState([])
    let [win, setWin] = useState(false)
    const {result, ref} = useContext(Context)
    let currRef = useRef(ref);

    useEffect(() => {
        setRefs(currRef)
    }, [currRef])


  
    const getOpacity = (e) => {
        e.target.style.opacity = 1;
        result.push({
            item: e.target.dataset.item,
            color: e.target.style.backgroundColor
        })
        if (result.length === 2) {
        if (result[0].color !== result[1].color) {
            setTimeout(() => {
                refs.current[result[0].item].style.opacity = 0;
                refs.current[result[1].item].style.opacity = 0;
                result.length = 0;
            }, 200)
        } else {
            result.length = 0;
        }
    }
    console.log(refs, result)
    let arr = refs.current.filter(item => item.style.opacity == 0)
    if (arr.length === 0) {
      setWin(true)
    }
  }

  const getWin = () => {
    window.location.reload()
  }

    return (
        <>
        { win 
            ? <div className='win'>
                <h3>Победа!</h3>
                <button onClick={getWin}>Заново</button>
              </div>
            : <>
                <h3>Game</h3>
                <Block reff={ref} getOpacity={getOpacity} />
              </>}
        </>
    )
}

export default Game