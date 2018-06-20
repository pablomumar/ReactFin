import React, { Component } from 'react';
import './fonts/fonts.css';

import Layout from './components/Layouts/Layout';
import {BrowserRouter} from 'react-router-dom'
import Auxiliar from './hoc/Auxiliar/Auxilar';

class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <Auxiliar>
                    <Layout/>
                </Auxiliar>
            </BrowserRouter>
        );
    }
}

export default App;
