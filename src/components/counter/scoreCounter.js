import React, { useEffect, useRef, useState } from 'react';
import "./score.css";

const ScoreCounter = ({ isRunning }) => {
    const [, setForceUpdate] = useState(new Date());

    const score = useRef(0);
    const multiplier = useRef(3);

    useEffect(() => {
        // console.log(isRunning)
        if (isRunning) {
            setInterval(() => {
                let mux = score.current + multiplier.current;
                score.current = mux;
                setForceUpdate(new Date());
            }, 2000)
        }

        return () => {
            clearInterval();
        }
    }, [isRunning])

    return (
        <>
            <h3 className={`scoreCounter ${score.current ? "activeCounting" : ""}`}>Score: {score.current}</h3>
        </>
    )
}

export { ScoreCounter }
