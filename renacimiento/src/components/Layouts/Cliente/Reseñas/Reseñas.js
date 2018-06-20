import React, {Component} from 'react';

import Menu from '../../../Menu/Menu';
import Footer from '../../../Footer/Footer';
import Auxiliar from '../../../../hoc/Auxiliar/Auxilar';
import Comentario from './Comentario/Comentario';

import classes from './Reseñas.css';

class resenas extends Component{
    state={
        comentario: [
            {cliente: 'x', comentario: 'x', rest: true, fecha: '19/02/1999'},
            {cliente: 'x2', comentario: 'x2', rest: false, fecha: '12/12/2112'},
            {cliente: 'x3', comentario: 'x3', rest: false, fecha: '31/02/2009'},
            {cliente: 'x4', comentario: 'x4', rest: true, fecha: '09/01/2018'}
        ]
    };

    render(){
        return (
            <Auxiliar>
                <Menu cliente/>

                <div className={classes.comentCont}>
                    <h2>Nuestros clientes</h2>

                    {this.state.comentario.map((comen, index) => {
                        return(
                            <Comentario
                                cliente={comen.cliente}
                                comentario={comen.comentario}
                                right={index%2!== 0}
                                rest={comen.rest}
                                fecha={comen.fecha}
                                key={'Comentario' + index}
                            />
                        )
                    })}
                </div>

                <Footer cliente/>
            </Auxiliar>
        )
    }
}

export default resenas;