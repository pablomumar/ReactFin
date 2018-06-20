import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Auxiliar from '../../../hoc/Auxiliar/Auxilar'
import Menu from '../../Menu/Menu';
import Footer from '../../Footer/Footer';
import classes from './LayoutClient.css';
import LatSection from '../../LatSection/LatSection';
import Logo from '../../../assets/images/logo.png';


class LayoutClient extends Component {
    state = {
        texto: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis doloremque eaque eum ipsam mollitia odit soluta voluptas! Dolores maiores, obcaecati! Adipisci consequuntur dignissimos dolor eveniet fuga iure qui similique!',
            'Hotel Boutique Casa del Coliseo es un Edificio colonial del siglo XVII, restaurado a la perfección, combinando el encanto histórico, la comodidad del siglo XXI y una exquisita decoración. El imponente edificio colonial  cuenta con cinco locales comerciales en el primer piso, 12 habitaciones en el entrepiso, 2 grandes salones en el segundo piso y una maravillosa terraza y piscina que invita al disfrute de todos sus visitantes. Al igual que la filosofía del hotel, la entrada en la Calle del Coliseo es discreta una vez traspasada la puerta se encontrará con el romanticismo colonial. Una escultural escalera de caracol lo transportará a nuestra terraza que dispone de una piscina, con asoleadoras, una preciosa pergola y área de BBQ con vistas de la arquitectura propia del centro de Cartagena, sin lugar a dudas el Hotel Boutique Casa del Coliseo es un escenario perfecto para disfrutar el romanticismo de la hermosa ciudad de Cartagena de Indias y su cálida temperaturaCon una localización privilegiada en el corazón del centro histórico de Cartagena de Indias, Hotel Boutique Casa del Coliseo se encuentra ubicada a solo 10 minutos del Aeropuerto Internacional Rafael Núñez, 5 minutos de Bocagrande (la zona moderna de Cartagena) y a pocos pasos de los principales  monumentos, museos, iglesias,  centros comerciales, plazas, bares y restaurantes.Sin lugar a dudas, Casa del Coliseo es el perfecto refugio para disfrutar de la increíble magia de la ciudad de Cartagena, combinando la vida activa del centro histórico con la tranquilidad y exquisito diseño interior creado para el deleite de nuestros huéspedes.'
        ]
    };

    render(){
        return (
            <Auxiliar>
            <Route path='/info' render={() =>
                (
                    <Auxiliar>
                        <Menu cliente/>
                        <div className={classes.cliHomeContent1}>
                            <h3 className={classes.cliHomeTitle}>Localización</h3>
                            <LatSection clase={classes.cliHomeTextContent} texto={this.state.texto[0]}/>
                        </div>
                        <div className={classes.cliHomeContent2}>
                            <div className={classes.cliHomeImgCont}>
                                <div><img src={Logo} alt=""/></div>
                            </div>
                        </div>
                        <div className={classes.cliHomeContent3}>
                            <LatSection right clase={[classes.cliHomeTextContent, classes.cliHomePosition2, classes.bgWhite, classes.textOver].join(' ')} titulo title={'Más de nosotros'} texto={this.state.texto[1]}/>
                        </div>
                        <div className={classes.imgBgPar}>
                            <div>
                                <h3>Sin más...</h3>
                            </div>
                        </div>

                        <Footer cliente />
                    </Auxiliar>

                )
            }/>
            </Auxiliar>
        );
    }
}

export default LayoutClient;