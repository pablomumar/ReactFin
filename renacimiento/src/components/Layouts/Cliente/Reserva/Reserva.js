import React, { Component } from 'react';

import Menu from '../../../Menu/Menu';
import Auxiliar from '../../../../hoc/Auxiliar/Auxilar';
import Spinner from '../../../UI/Spinner/Spinner';
import axios from '../../../../axiosDDBB';
import Input from '../../../UI/Input/Input';
import Button2 from '../../../UI/Button2/Button2';

import classes from './Reserva.css';

class Reserva extends Component{
    state = {
        orderFormRest: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            }
        },
        orderFormHotel: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            surname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Surname'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            }
        },
        formRest: true,
        formIsValid: false,
        loading: false
    };

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        let reserva = {};
        if (this.state.formRest) {
            for (let formElementIdentifier in this.state.orderFormRest) {
                formData[formElementIdentifier] = this.state.orderFormRest[formElementIdentifier].value;
            }
            reserva = {tipo: 'Restaurante', datosReserva: formData};

        } else {
            for (let formElementIdentifier in this.state.orderFormHotel) {
                formData[formElementIdentifier] = this.state.orderFormHotel[formElementIdentifier].value;
            }
            reserva = {tipo: 'Hotel', datosReserva: formData};
        }

        console.log(reserva);
        axios.post( 'https://renacimiento-7b1db.firebaseio.com/cliente/reserva.json', reserva )
            .then( response => {
                console.log(response);
                this.setState( { loading: false } );
                this.props.history.push( '/reserva-cliente' ); //Redirect
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    };

    static checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandlerRest = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderFormRest
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = Reserva.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderFormRest: updatedOrderForm, formIsValid: formIsValid});
    };

    inputChangedHandlerHotel = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderFormHotel
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = Reserva.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderFormHotel: updatedOrderForm, formIsValid: formIsValid});
    };

    changeForm = () => {
        this.setState({formRest: !this.state.formRest})
    };

    render(){
        const formElementsArray =[];
        let titulo = (this.state.formRest) ? <h4 className={classes.formTitle}>Restaurante</h4> : <h4 className={classes.formTitle}>Hotel</h4>;
        let listForm = (this.state.formRest) ? this.state.orderFormRest : this.state.orderFormHotel;
        for (let key in listForm) {
            formElementsArray.push({
                id: key,
                config: listForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => {(this.state.formRest) ? this.inputChangedHandlerRest(event, formElement.id) : this.inputChangedHandlerHotel(event, formElement.id)}} />
                ))}
                <div className={classes.fullWidthCentered}>
                    <Button2 btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button2>
                </div>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <Auxiliar>
                <Menu cliente/>

                <div className={classes.reservaCont}>
                    <h2>Solicita una reserva</h2>

                    <div className={classes.formCont}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <p onClick={this.changeForm} className={(this.state.formRest) ? classes.inactive : classes.active}>Hotel</p>
                            </div>
                            <div className='col-md-6'>
                                <p onClick={this.changeForm} className={(this.state.formRest) ? classes.active : classes.inactive}>Restaurante</p>
                            </div>
                        </div>
                        <div className={classes.almostForm}>
                            {titulo}
                            {form}
                        </div>
                    </div>

                </div>
            </Auxiliar>
        )
    }
}

export default Reserva;