import React from 'react';
import {Link} from 'react-router-dom'

import classes from './Button.css';

const button = (props) => (
    <div className={classes.WrapButton}>
        <Link to={props.route}>
            <button className={classes.Button}>
                {props.children}
            </button>
        </Link>
    </div>
);

export default button;