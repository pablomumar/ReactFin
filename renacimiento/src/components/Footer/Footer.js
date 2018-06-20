import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Footer.css';
import Auxiliar from '../../hoc/Auxiliar/Auxilar';

const footer = (props) => {
    return (
        <footer className={classes.footerContainer}>
            { (props.cliente) ?
                <Auxiliar>
                    <div className={classes.footerTextCont}>
                        <p>&nbsp;</p>
                        <p>Email</p>
                        <p>Direccion</p>
                        <p>Numero contacto</p>
                    </div>
                    <div className={classes.footerBtnCont}>
                        <p>&nbsp;</p>
                        <Link to='/reserva-cliente'><div className={classes.footerBtn}><p>RESERVA</p></div></Link>
                    </div>
                </Auxiliar>
                :
                <div className={classes.footerCenter}>
                    <p>email@contacto.com</p>
                    <p>telefono contacto</p>
                </div>

                }
        </footer>
    )
};

export default footer;