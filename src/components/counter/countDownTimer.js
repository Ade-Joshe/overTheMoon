import React, { useEffect, useRef, useState } from 'react';

let interval = undefined;

const CountDownTimer = ({ onEndTimer }) => {

    let timer = useRef(3);
    const [, setForceUpdate] = useState(Math.random());

    useEffect(() => {
        interval = setInterval(() => {
            timer.current = timer.current - 1;
            // console.log(timer.current)
            setForceUpdate(Math.random());

            if (timer.current === 0) {
                // removeModal();
                clearInterval(interval);
                onEndTimer();
            }

        }, 1500);
        return () => {
            clearInterval();
        }

    }, [onEndTimer])

    return (
        <div id="modal" className={timer.current < 0 ? "" : "show"}>
            <div className="modal_body" id="countDownTimer">
                <h1>{timer.current}</h1>
            </div>
        </div>
    )
}

export { CountDownTimer }