import React from 'react';
import '../assets/css/TextBox.css';

export class TextBox extends React.Component {
  render() {
    let link = '';
    if (this.props.link) {
      link = <a href = {this.props.link}>{this.props.linkText}</a>;
    }
    return (
      <div className = 'textBox'>
        <h1 className = 'title'>
          {this.props.title}
        </h1>
        <h2 className = 'text'>
          {this.props.text}
        </h2> 
        <h3 className = 'subtext'>
          {this.props.subtext}
          {link}
        </h3>
      </div>
    );
  };
};