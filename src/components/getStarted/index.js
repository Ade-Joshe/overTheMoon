import React from 'react'

const GetStarted = ({ onStartTimer }) => {
    return (
        <div id="getStartedTrigger" onClick={() => onStartTimer()}>
            <h3>Get Started</h3>
        </div>
    )
}

export { GetStarted }