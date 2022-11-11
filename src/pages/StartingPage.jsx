import '../assets/css/StartingPage.css';
import React from 'react';

//Import of the components
import { Logo } from '../components/Logo';

export class StartingPage extends React.Component {
  render() {
    return (
      <div className = "StartingPage">
        <Logo 
          color = 'white'/>
          <br /><br /><br />
        #NingúnHogarSinAlimentos
      </div>
    );
  };
};