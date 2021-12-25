import React, { useEffect } from 'react';
import { ScoreCounter } from '../counter';
import UserAvatar from '../userAvatar';
import "./header.css";

const Header = ({ isRunning }) => {

    useEffect(() => {
    }, [isRunning]);

    // console.log(isRunning)
    return (
        <header aria-label="game header" className={isRunning && "centerElement"}>
            {!isRunning && <h2>OTM</h2>}
            <ScoreCounter isRunning={isRunning} />
            {!isRunning && <UserAvatar />}
        </header>
    )
}

export { Header };