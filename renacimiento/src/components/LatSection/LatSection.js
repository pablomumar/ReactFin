import React from 'react';

import classes from './LatSection.css';

const latSection = (props) => {
    return(
        <div className={[props.clase ? props.clase : classes.contText, props.right ? classes.right : null].join(' ')}>
            {(props.titulo) ?
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.texto ? props.texto : props.children}</p>
                </div>
                :
                <p>{props.texto ? props.texto : props.children}</p>
            }

        </div>
    )
};

export default latSection;