import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ControlKeys, FeiFei, GetStarted, Header, Scene1 } from './components';
import { CountDownTimer } from './components/counter';
import { keyPress } from './utils';

function App() {

  const [, setForceUpdate] = useState(Math.random())

  let store = useRef({
    firstTimeHere: true,
    isRunning: false,
    timerStart: false
  });

  useEffect(() => {
    runFirstTimeCheck();
    keyPress(toggleCounting);

    // console.log(store.current)
  });

  const runFirstTimeCheck = () => {
    let storeData = JSON.parse(localStorage.getItem("otm_config"));
    if (storeData?.loadAssets) {
      store.current = { ...store.current, firstTimeHere: true };
      setForceUpdate(Math.random());
    }
    else {
      store.current = { ...store.current, firstTimeHere: true }
    }
  }

  // const configureStore = (data) => {
  //   localStorage.setItem("otm_config", JSON.stringify(data ? data : {}))
  // }

  const toggleCounting = () => {
    store.current = { ...store.current, isRunning: store.current.isRunning ? false : true }
    setForceUpdate(Math.random());
  }

  const stopTimer = () => {
    store.current = { ...store.current, timerStart: false, isRunning: true };
    // console.log(store.current)
    setForceUpdate(Math.random());
    // toggleCounting();
  }

  const startTimer = () => {
    store.current = { ...store.current, timerStart: true, isRunning: false };
    setForceUpdate(Math.random());
  } 

  return (
    <div className="App">
      <Header isRunning={store.current.isRunning && !store.current.timerStart ? true : false} />

      {
        store.current.timerStart ?
          <CountDownTimer onEndTimer={stopTimer} />
          :
          !store.current.isRunning ?
            <GetStarted onStartTimer={startTimer} />
            :
            <FeiFei />
      }

      <ControlKeys />
      <Scene1 />
    </div>
  );
}

export default App;