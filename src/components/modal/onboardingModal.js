import React, { useEffect } from 'react';
import { removeModal } from '../../utils';

const OnboardingModal = ({ visible }) => {

    useEffect(() => {
        if (!visible) {
            setTimeout(() => {
                removeModal();
            }, 500);
        }
    }, [visible])

    return (
        <div id="modal" className={visible ? "show" : ""}>
            <div className="modal_body">
                {/* <h2>Welcome,<br /> Are you ready for an adventure over the moon ?</h2> */}
                {/* Enter your name to get started. */}
                <button>Get Started</button>
            </div>
        </div>
    )
}

export { OnboardingModal }