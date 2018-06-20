import React, { Component } from 'react';

import Menu from '../../../Menu/Menu';
import Footer from '../../../Footer/Footer';
import Auxiliar from '../../../../hoc/Auxiliar/Auxilar';
import Input from '../../../UI/Input/Input';
import Button2 from '../../../UI/Button2/Button2';
import Spinner from '../../../UI/Spinner/Spinner';

import classes from './Login.css';

class Login extends Component{
    state={
        loginForm:{
            user: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Username'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }
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

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = Login.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({loginForm: updatedOrderForm, formIsValid: formIsValid});
    };


    render(){
        const formElementsArray =[];
        let listForm = this.state.loginForm;
        for (let key in listForm) {
            formElementsArray.push({
                id: key,
                config: listForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}> {/*Hay que crear la funcion de login*/}
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <div className={classes.fullWidthCentered}>
                    <Button2 btnType="Success" disabled={!this.state.formIsValid}>LOG IN</Button2>
                </div>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <Auxiliar>
                <Menu/> {/*Esto va fuera cuando realice la funcion del login*/}

                <div className={classes.mainCont}>
                    <h1>Login</h1>

                    <div className={classes.formCont}>
                        <div>
                            {form}
                        </div>
                    </div>

                </div>

                <Footer/>
            </Auxiliar>
        )
    }
}

export default Login;