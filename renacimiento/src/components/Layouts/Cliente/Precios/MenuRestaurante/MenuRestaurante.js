import React from 'react';

const  menuRestaurante = (props) => {
    return(
        Object.keys(props.state.precio).map((_, index) => {
            return (
                <div className={props.claseCont} key={'Menu'+ index}>
                    <div>
                        <h4>Primero</h4>
                        {Object.keys( props.state.primeros[index]).map((_,index2) => {
                            return <p key={'primero'+index2}>{props.state.primeros[index][index2]}</p>
                            })
                        }
                    </div>
                    <div>
                        <h4>Segundo</h4>
                        {Object.keys( props.state.segundos[index]).map((_,index2) => {
                            return <p key={'segundo'+index2}>{props.state.segundos[index][index2]}</p>
                            })
                        }
                    </div>
                    <div>
                        <h4>Postre</h4>
                        <p>{(props.state.postres[index]) ?
                            props.state.postres[index] : 'Cualquier postre que se elija'}</p>
                    </div>
                    <div>
                        <small>{props.state.precio[index]} &euro;</small>
                    </div>
                </div>
            )
        })
    )
};

export default menuRestaurante;