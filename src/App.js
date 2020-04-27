import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import Block from './components/Block'
import {connect} from 'react-redux'


const  App = (props) => {
  let [refs, setRefs] = useState([])
  let [win, setWin] = useState(false)

  let currRef = useRef(props.refs);

  useEffect(() => {
    setRefs(currRef)
  }, [currRef])



  let result = []
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
    let arr = refs.current.filter(item => item.style.opacity == 0)
    if (arr.length === 0) {
      setWin(true)
    }
  }

  const getWin = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      { win 
      ? <div className='win'>
          <h3>Победа!</h3>
          <button onClick={getWin}>Заново</button>
        </div>
      : <>
          <h3>Game</h3>
          <Block reff={props.refs} getOpacity={getOpacity} />
        </>}
      </div>
  );
}

const mapStateToProps = state => {
  return {
    refs: state.refs
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addRef: ref => dispatch(ref)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
