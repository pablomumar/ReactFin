import React, { Component } from 'react';
import './App.css';
import HomeContent from './HomeContent/HomeContent';
import logo from './logo.png';
import './fonts/fonts.css';

class App extends Component {
    state = {
        homeContent: [
            {logo: logo, content: true, clase: 'home-content1', link: '#',title:'CLIENTE',texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi cumque distinctio eaque esse fugiat.'},
            {logo: false, content: false, clase: 'home-content2', texto: 'x'},
            {logo: false, content: true, clase: 'home-content3', link: '#',extraClass: 'text-right',title:'EMPLEADOS',texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aut consequuntur debitis ea eum eveniet explicabo fugiat.'}
            ]
    };

    render() {
        return (
            <div className='App'>
                {this.state.homeContent.map((homeContent) => {
                    return (
                        <HomeContent
                            logo={homeContent.logo}
                            content={homeContent.content}
                            clase={homeContent.clase}
                            title={homeContent.title}
                            link={homeContent.link}
                            extraClass={homeContent.extraClass}
                        >{homeContent.texto}</HomeContent>
                    )
                })}
            </div>
        );
    }
}

export default App;
