import React from 'react';

import classes from './Logos.css';

const logo = (props) => {
    const style = {
        height: props.height ? props.height : null,
        width: props.width
    };

    return (
        <div style={style} className={classes.LogoDiv}>
            <img src={props.img} className={classes.LogoImg} alt="Soy un logo LOL"/>
        </div>
    )
};

export default logo;