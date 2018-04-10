import React from 'react';

const homeContent = (props) => {
    if (props.content) {
        return (
            <div className={props.clase}>

                {props.logo ?
                <div className="home-content-logo">
                    <div><img src={props.logo} alt="" className="home-logo"/></div>
                </div> : null
                }

                <div className={"home-content-text " + props.extraClass}>
                    <h3 className="home-title">{props.title}</h3>
                    <p className="home-text">{props.children}</p>
                </div>

                <div className="home-button">
                    <a href={props.link}>
                        <div><p>ENTRA</p></div>
                    </a>
                </div>

            </div>
        )
    } else  {
        return <div className={props.clase}>{props.children}</div>
    }
};

export default homeContent;