import React, { useState } from 'react'
import { userAvatar } from '../../assets';

const styles = {
    imageStyle: {
        width: 50,
        height: 50,
        objectFit: "cover",
        borderRadius: 30,
        cursor: "none"
    },
    boxStyle: {
        position: "relative"
    },
    tipBox: {
        position: "absolute",
        top: "100%",
        right: 0,
        display: "flex",
        opacity: 1,
        fontWeight: "small",
        width: "max-content",
        transition: "opacity 0.35s ease-in-out",
        color: "wheat"
    }
};

const UserAvatar = () => {

    const [showTip, setshowTip] = useState(false)

    const mouseMoveFunc = () => {
        setshowTip(true);
    }

    const setMouseVal = () => {
        setshowTip(false);
    }

    return (
        <div style={styles.boxStyle}>
            <img src={userAvatar} onMouseEnter={mouseMoveFunc} onMouseLeave={setMouseVal} alt={""} style={styles.imageStyle} />
            <small style={{ ...styles.tipBox, opacity: showTip ? 1 : 0 }}>Hello Gracie!</small>
        </div>
    )
}

export default UserAvatar
