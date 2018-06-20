import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Menu.css';
import Logo from '../../assets/images/logo-texto.png';


const menu = (props) => {
    return (
        <header className={classes.menuContainer}>
            <div className={classes.menuLogoCont}>
                <div>
                    <Link to='/'><img src={Logo} alt="" className={classes.menuLogo}/></Link>
                </div>
            </div>
            <div className={classes.menuElemCont}>
                {props.cliente ?
                <ul>
                    <li><Link to='/info'>Info</Link></li>
                    <li><Link to='/precios'>Precios</Link></li>
                    <li><Link to='/reserva-cliente'>Reserva</Link></li>
                    <li><Link to='/comentarios'>Reseñas</Link></li>
                </ul>
                :
                <ul>
                    <li><Link to='/worker-home'>Inicio</Link></li>
                    <li><Link to='/stock'>Stock</Link></li>
                    <li><Link to='/reservas'>Reservas</Link></li>
                    <li><Link to='/pagos'>Pagos</Link></li>
                </ul>}
            </div>
        </header>
    )
};

export default menu;