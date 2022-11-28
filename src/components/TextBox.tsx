import React from 'react';
import '../assets/css/TextBox.css';


interface Props {
  title: string
  text: string
  link?: string
  linkText?: string
  subtext?: string
};

export const TextBox = ({link, linkText, title, text, subtext}: Props) => {
  return (
    <div className = 'textBox'>
      <h1 className = 'title'>
        {title}
      </h1>
      <h2 className = 'text'>
        {text}
      </h2> 
      <h3 className = 'subtext'>
        {subtext}
        <a href = {link}>{linkText}</a>
      </h3>
    </div>
  );
};