import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import classes from './Layout.css';
import bg1 from '../../assets/images/content-bg/cliente-bg.jpg';
import bg2 from '../../assets/images/content-bg/empleados.jpg';
import logo from '../../assets/images/logo.png';
import Logo from '../../components/Logo/Logo';
import Auxiliar from '../../hoc/Auxiliar/Auxilar'
import Button from '../../components/UI/Button/Button';
import DivImg from '../DivImg/DivImg';
import LatSection from '../LatSection/LatSection';
import LayoutClient from "./Cliente/LayoutClient";
import LayoutWorker from "./Worker/LayoutWorker";
import Precios from '../Layouts/Cliente/Precios/Precios';
import Reserva from '../Layouts/Cliente/Reserva/Reserva';
import Resenas from '../Layouts/Cliente/Reseñas/Reseñas';
import Login from '../Layouts/Worker/Login/Login';
import Stock from '../Layouts/Worker/Stock/Stock';
import ReservasWorker from '../Layouts/Worker/ReservasWorker/ReservasWorker';
import Pagos from '../Layouts/Worker/Pagos/Pagos';

class LayoutHome extends Component {
    state = {
        DivImg: [true, false, true],
        image: [bg1, null, bg2],
        title: ['Clientes', null, 'Trabajadores'],
        texto: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi cumque distinctio eaque esse fugiat.',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aut consequuntur debitis ea eum eveniet explicabo fugiat.'],
        floatRight: [false, null, true],
        buttonLayoutVal: ['/precios', null, '/login']
    };

    render(){
        return (
            <Auxiliar>
                <Route path='/' exact render={() => (
                    <Auxiliar>
                    <Logo img={logo} width='150px'/>
                    {this.state.DivImg.map((div, index) => {if (div){
                        return (
                        <DivImg image={this.state.image[index]} key={'DivImg' + index}>
                        <LatSection
                            titulo
                            title={this.state.title[index]}
                            right={this.state.floatRight[index]}
                            texto={this.state.texto[index]}
                        />
                        <Button route={this.state.buttonLayoutVal[index]}>ENTRA</Button>
                        </DivImg>
                        )
                    } else {
                        return <p className={classes.Test} key={'nadaXD' + index}>Cosicas</p>
                    }}
                        )}
                    </Auxiliar>
                )}/>
                <Route path="/info" exact component={LayoutClient}/>
                <Route path="/login" exact component={Login}/> {/*Aqui va el path de redireccion del primer worker*/}
                <Route path='/precios' exact component={Precios}/>
                <Route path='/reserva-cliente' exact component={Reserva}/>
                <Route path='/comentarios' exact component={Resenas}/>
                <Route path='/worker-home' exact component={LayoutWorker}/>
                <Route path='/stock' exact component={Stock}/>
                <Route path='/reservas' exact component={ReservasWorker}/>
                <Route path='/pagos' exact component={Pagos}/>
            </Auxiliar>
        );
    }
}

export default LayoutHome;