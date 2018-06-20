import React from 'react';

import classes from './Comentario.css';

const comentario = (props) => {
    return(
        <div className={classes.mainCont}>
            <div className={[props.right ? classes.right : classes.left, classes.comentContainer].join(' ')}>
                <h3>{props.cliente}</h3>
                <p>{props.comentario}</p>
                <div className={classes.contServ}>
                    <small>Servicio: {props.rest ? 'Restaurante' : 'Hotel'}</small>
                    <small>{props.fecha}</small>
                </div>
            </div>
        </div>
    )
};

export default comentario;