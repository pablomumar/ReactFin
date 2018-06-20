import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Menu from '../../Menu/Menu';
import Footer from '../../Footer/Footer';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar'

import classes from './LayoutWorker.css';

class LayoutWorker extends Component {
    render(){
        return (
            <Auxiliar>
                <Menu/>

                <div className={classes.mainCont}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className={classes.linkCont}>
                                    <Link className={classes.link} to='/stock'><div><p>Stock</p></div></Link>
                                    <Link className={classes.link} to='/reservas'><div><p>Reservas</p></div></Link>
                                    <Link className={classes.link} to='/pagos'><div><p>Pagos</p></div></Link>
                                </div>
                            </div>
                            <div className={[classes.perfil, "col-md-5"].join(' ')}>
                                <h3>Sesión</h3>
                                <div className={classes.datos}>
                                    <h5>Usuario:</h5>
                                    <p>El Hermano del Manue</p>
                                </div>
                                <div className={classes.logOut}>
                                    <Link><p>Log out</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </Auxiliar>
        );
    }
}

export default LayoutWorker;