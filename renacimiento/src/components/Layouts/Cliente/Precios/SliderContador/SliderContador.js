import React from 'react';

const sliderContador = (props) => {
    return(
        <small>{(props.contador +1) + ' / ' + props.state.imgPlatos.length}</small>
    )
};

export default sliderContador;