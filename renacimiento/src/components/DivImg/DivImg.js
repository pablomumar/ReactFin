import React from 'react';

import classes from './DivImg.css';

const divImg = (props) => {
    let style = {backgroundImage: 'url(' + props.image + ')'};

    return (
        <div className={classes.BackgroundSets} style={style}>
            {props.children}
        </div>
    )
};

export default divImg;