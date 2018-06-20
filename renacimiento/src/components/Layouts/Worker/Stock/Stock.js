import React from 'react';

import Menu from '../../../Menu/Menu';
import Footer from '../../../Footer/Footer';
import Auxiliar from '../../../../hoc/Auxiliar/Auxilar';

const stock = () => {
    return (
        <Auxiliar>
            <Menu/>
            <h1>Stock</h1>
            <Footer/>
        </Auxiliar>
    )
};

export default stock;