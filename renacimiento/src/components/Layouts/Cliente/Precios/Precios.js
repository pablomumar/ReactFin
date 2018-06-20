import React, { Component } from 'react';
import $ from 'jquery';

import Menu from '../../../Menu/Menu';
import Footer from '../../../Footer/Footer';
import Auxiliar from '../../../../hoc/Auxiliar/Auxilar';
import SliderContador from './SliderContador/SliderContador';
import MenuRestaurante from './MenuRestaurante/MenuRestaurante';
import classes from './Precios.css';
import animation from './AnimationPrecios.css';

import room1 from '../../../../assets/images/room/room1.jpg'
import room2 from '../../../../assets/images/room/room2.jpg'
import room3 from '../../../../assets/images/room/room3.jpg'
import comida1 from '../../../../assets/images/comida/comida1.jpg'
import comida2 from '../../../../assets/images/comida/comida2.jpg'
import comida3 from '../../../../assets/images/comida/comida3.jpg'
import comida4 from '../../../../assets/images/comida/comida4.jpg'
import comida5 from '../../../../assets/images/comida/comida5.jpg'

// import Logo from '../../../../assets/images/logo.png';

let CONTADOR_REST = 0;
let CONTADOR_HOTEL = 0;

class precios extends Component{
    state = {
        hotel: {
            imgRoom: [room1, room2, room3],
            titulo: ['Bosque', 'Lago', 'Marina'],
            texto: [
                'Habitación de madera con muchas cosas de madera que da la sensación de estar durmiendo en las entrañas de un gran árbol. Mu bonica y con buenas vistas como el resto de habitaciones que lo flipas con todas que son monisimas.',
                'Colores que inspiran tranquilidad, que la tranquilidad es lo que se valora. Mucha gente no le da importancia a la tranquilidad y viven agobiaos. Pobreticos. Asi no se puede vivir a gusto, pero en esta habitación si.',
                'Agua, luz, madera, cristales... Componentes que se mezclan como nunca antes para crear un ambiente embaucador que te dejará sin querer salir de la habitación. Eso es malo y bueno, malo para ti que no vas a ver más cosas y bueno para nosotros jeje.'
            ],
            precioRoom: [200, 180, 160],
            bgColorDiv: ['#a39775', '#ebebe0', '#99ccff']
        },
        restaurante:{
            menu:{
                primeros: [
                    ['Primero1', 'Primero2', 'Primero3', 'Primero4'],
                    ['Primero1', 'Primero2', 'Primero3'],
                    ['Primero1', 'Primero2']
                ],
                segundos: [
                    ['Segundo1', 'Segundo2'],
                    ['Segundo1', 'Segundo2', 'Segundo3', 'Segundo4'],
                    ['Segundo1', 'Segundo2', 'Segundo3']
                ],
                postres: [
                    'Solo yogurt o fruta',
                    'Helados, fruta, yogurt',
                    false
                ],
                precio: [12, 18, 20]
            },
            imgPlatos: [comida1, comida2, comida3, comida4, comida5],
            nombrePlato: [
                'Bocaillos Gordos',
                'Crea tus platos',
                'Platos "soy vegano"',
                'Pasta frsca',
                'COmidas del mundo'
            ]
        },
        submenuR: false
    };

    changeSubmenuStyle = () => {
        this.setState({submenuR: !this.state.submenuR})
    };

    componentDidMount() {
        const inicioPrecio = $('#inicioPrecio');
        const sliderHotel = $('#sliderHotel');
        const footer = $('#footer');
        const submenu = $('#submenu');
        const restaurante = $('#restaurante-container');

        $(document).ready(() => {
            setInterval(this.controlRestContUp, 22000);
            setInterval(this.controlHotelContUp, 17000);

            $('#Hotel').on('click', function () {
                inicioPrecio.addClass(animation.desaparece);
                setTimeout( function () {
                    inicioPrecio.css('display', 'none');
                    sliderHotel.addClass(animation.aparece).css('display', 'block');
                    submenu.addClass(animation.aparece).css('display', 'block');
                    footer.addClass(animation.aparece).css('display', 'block');
                },1000);

            });

            $('#restaurante').on('click', () => {
                this.changeSubmenuStyle();
                inicioPrecio.addClass(animation.desaparece);
                setTimeout( function () {
                    inicioPrecio.css('display', 'none');
                    restaurante.addClass(animation.aparece).css('display', 'block');
                    submenu.addClass(animation.aparece).css('display', 'block');
                    footer.addClass(animation.aparece).css('display', 'block');
                },1000);
            });

            $('#Hotel2').on('click', () => {
                this.changeSubmenuStyle();
                restaurante.removeClass(animation.aparece).addClass(animation.desaparece);
                setTimeout( function () {
                    restaurante.css('display', 'none');
                    sliderHotel.addClass(animation.aparece).css('display', 'block');
                },1000);

            });

            $('#restaurante2').on('click', () => {
                this.changeSubmenuStyle();
                sliderHotel.removeClass(animation.aparece).addClass(animation.desaparece);
                setTimeout( function () {
                    sliderHotel.css('display', 'none');
                    restaurante.addClass(animation.aparece).css('display', 'block');
                },1000);
            });

            let mutantHotel = new MutationObserver(() => {
                $('#imgHotel').removeClass(animation.apareceSoloOpacity).addClass(animation.desaparece);
                $('#divLeftSideHotel').removeClass(animation.apareceSoloOpacity).addClass(animation.desaparece);
                setTimeout(() => {
                    this.changeBgImgHotel();
                    $('#imgHotel').removeClass(animation.desaparece).addClass(animation.apareceSoloOpacity);
                    $('#divLeftSideHotel').removeClass(animation.desaparece).addClass(animation.apareceSoloOpacity);
                }, 1000);
            });

            mutantHotel.observe(document.querySelector('#divLeftSideHotel h3'), {attributes: true, childList: false});

            let mutantRest = new MutationObserver(() => {
                $('#platoMain').removeClass(animation.apareceSoloOpacity).addClass(animation.desaparece);
                $('#platoRight').removeClass(animation.apareceSoloOpacity).addClass(animation.desaparece);
                $('#platoLeft').removeClass(animation.apareceSoloOpacity).addClass(animation.desaparece);
                setTimeout(() => {
                    this.changeBgImgRest();
                    $('#platoMain').removeClass(animation.desaparece).addClass(animation.apareceSoloOpacity);
                    $('#platoRight').removeClass(animation.desaparece).addClass(animation.apareceSoloOpacity);
                    $('#platoLeft').removeClass(animation.desaparece).addClass(animation.apareceSoloOpacity);
                }, 1000);
            });

            mutantRest.observe(document.querySelector('#platoMain h3'), {attributes: true, childList: false})
        });
    };

    controlHotelContUp = (Up = true) =>{
        let length = this.state.hotel.imgRoom.length - 1;
        let contador = CONTADOR_HOTEL;

        if (Up) {
            const newCont = contador+1;
            (contador < length) ? CONTADOR_HOTEL = newCont : CONTADOR_HOTEL = 0
        } else {
            const newCont = contador-1;
            (contador === 0) ? CONTADOR_HOTEL = length : CONTADOR_HOTEL = newCont
        }
        this.forceUpdate();
    };

    backgroundRestLeft = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url(' + this.state.restaurante.imgPlatos[(CONTADOR_REST === 0) ? this.state.restaurante.nombrePlato.length - 1 : CONTADOR_REST - 1] + ')'
    };
    backgroundRest = {
        backgroundPosition: 'center',
        backgroundSize: 'cover'
        , backgroundImage: 'url(' + this.state.restaurante.imgPlatos[CONTADOR_REST] + ')'
    };
    backgroundRestRight = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url(' + this.state.restaurante.imgPlatos[(CONTADOR_REST === this.state.restaurante.imgPlatos.length-1)? 0 : CONTADOR_REST+1] + ')'
    };


    bgColorHotel = {
        backgroundColor: this.state.hotel.bgColorDiv[CONTADOR_HOTEL]
    };
    backgroundHotel = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url(' + this.state.hotel.imgRoom[CONTADOR_HOTEL] + ')'
    };

    changeBgImgHotel = () => {
        this.backgroundHotel = {backgroundSize: 'cover', backgroundImage: 'url(' + this.state.hotel.imgRoom[CONTADOR_HOTEL] + ')'};
        this.bgColorHotel = {backgroundColor: this.state.hotel.bgColorDiv[CONTADOR_HOTEL]};
        this.forceUpdate();
    };

    changeBgImgRest = () => {
        this.backgroundRestLeft = {backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: 'url(' + this.state.restaurante.imgPlatos[(CONTADOR_REST === 0) ? this.state.restaurante.nombrePlato.length - 1 : CONTADOR_REST - 1] + ')'};
        this.backgroundRest = {backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: 'url(' + this.state.restaurante.imgPlatos[CONTADOR_REST] + ')'};
        this.backgroundRestRight = {backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: 'url(' + this.state.restaurante.imgPlatos[(CONTADOR_REST === this.state.restaurante.imgPlatos.length-1)? 0 : CONTADOR_REST+1] + ')'};
        this.forceUpdate();
        };

    controlRestContUp = (Up = true) =>{
        let length = this.state.restaurante.imgPlatos.length-1;
        let contador = CONTADOR_REST;

        if (Up) {
            const newCont = contador+1;
            (contador < length) ? CONTADOR_REST = newCont : CONTADOR_REST = 0
        } else {
            const newCont = contador-1;
            (contador === 0) ? CONTADOR_REST = length : CONTADOR_REST = newCont
        }
        this.forceUpdate();
    };

    render(){
        return (
            <Auxiliar>
                <Menu cliente/>
                <div id='inicioPrecio' className="container-fluid">
                    <div className="row">
                        <div className={classes.inicio}>
                            <div id='Hotel' className={classes.altura + " col-md-6 col-xs-6"}>
                                <div>
                                    <h3 className={classes.title}>Hotel</h3>
                                    <p className={classes.texto}>Mira nuestro catálogo de habitaciones</p>
                                    <p className={classes.entrada}>Entra</p>
                                </div>
                            </div>
                            <div id='restaurante' className={classes.altura + " col-md-6 col-xs-6"}>
                                <div>
                                    <h3 className={classes.title}>Restaurante</h3>
                                    <p className={classes.texto}>Observa nuestros platos, menus y servicios</p>
                                    <p className={classes.entrada}>Entra</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SUBMENU */}
                <div id='submenu' className={classes.submenu + ' container-fluid'} style={{display: 'none'}}>
                    <div className="row">
                        <div className="col-md-6" style={this.state.submenuR ? {borderBottom: '1px #eee solid'} : {borderBottom: '1px black solid'}}>
                            <a id='Hotel2' style={this.state.submenuR ? {color: '#eee'} : {color: 'black'}}>Hotel</a>
                        </div>
                        <div className="col-md-6" style={this.state.submenuR ? {borderBottom: '1px black solid'} : {borderBottom: '1px #eee solid'}}>
                            <a id='restaurante2' style={this.state.submenuR ? {color: 'black'} : {color: '#eee'}}>Restaurante</a>
                        </div>
                    </div>
                </div>

                {/* SLIDER HOTEL PRECIOS*/}
                <div id='sliderHotel' className={classes.sliderHotel + ' container'} style={{display: 'none'}}>
                    <h2>Catálogo de habitaciones</h2>
                    <div className="row">
                        <div id='divLeftSideHotel' className={classes.leftSide + " col-md-5"} style={this.bgColorHotel}>
                            <h3 value={CONTADOR_HOTEL}>{this.state.hotel.titulo[CONTADOR_HOTEL]}</h3>
                            <p>{this.state.hotel.texto[CONTADOR_HOTEL]}</p>
                            <small><strong>{'Precio: ' + this.state.hotel.precioRoom[CONTADOR_HOTEL]}</strong></small>
                            <div className={classes.controles}>
                                <p onClick={() => this.controlHotelContUp(false)}>Last</p>
                                <p>{(CONTADOR_HOTEL + 1) + ' / ' + this.state.hotel.imgRoom.length}</p>
                                <p onClick={() => this.controlHotelContUp(true)}>Next</p>
                            </div>
                        </div>
                        <div id='imgHotel' className={classes.rightSide + " col-md-7"} style={this.backgroundHotel}> </div>
                    </div>
                </div>

                {/*Cosas Restaurante*/}
                <div id='restaurante-container' className={classes.restauranteContainer + ' container'} style={{display: 'none'}}>
                    <h2>Menus</h2>
                    <div className={classes.flexAround}>
                        <MenuRestaurante
                            state={this.state.restaurante.menu}
                            claseCont={classes.menus}
                        />
                    </div>

                    <div className={classes.midDiv}>
                        <h2 className={classes.removingPad}>Platos Individuales</h2>
                        <SliderContador
                            state={this.state.restaurante}
                            contador={CONTADOR_REST}
                        />
                    </div>

                    <div className={classes.flexAroundLast}>
                        <div id='platoLeft' className={classes.platoLeft} style={this.backgroundRestLeft} onClick={() => this.controlRestContUp(false)}>
                            <h3>{this.state.restaurante.nombrePlato[(CONTADOR_REST === 0) ? this.state.restaurante.nombrePlato.length - 1 : CONTADOR_REST - 1]}</h3>
                        </div>
                        <div id='platoMain' className={classes.platoMain} style={this.backgroundRest}>
                            <h3 value={CONTADOR_REST}>{this.state.restaurante.nombrePlato[CONTADOR_REST]}</h3>
                        </div>
                        <div id='platoRight' className={classes.platoRight} style={this.backgroundRestRight} onClick={this.controlRestContUp}>
                            <h3>{this.state.restaurante.nombrePlato[(CONTADOR_REST === this.state.restaurante.imgPlatos.length-1)? 0 : CONTADOR_REST+1]}</h3>
                        </div>
                    </div>
                </div>

                <div id="footer" style={{display: 'none'}}>
                    <Footer cliente/>
                </div>

            </Auxiliar>
        )
    };
}

export default precios;