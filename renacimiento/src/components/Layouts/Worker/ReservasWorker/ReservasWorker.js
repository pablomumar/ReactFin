import React from 'react';

import Menu from '../../../Menu/Menu';
import Footer from '../../../Footer/Footer';
import Auxiliar from '../../../../hoc/Auxiliar/Auxilar';

const reservasWorker = () => {
    return (
        <Auxiliar>
            <Menu/>
            <h1>Reservas Worker</h1>
            <Footer/>
        </Auxiliar>
    )
};

export default reservasWorker;