import { useState } from 'react'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <div className="back_button">
          </div>
        <text className="email_title">Email
        </text>
        <text className="email_description">
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Maecenas lacus purus, hendrerit eu libero sit amet.
        </text>
        <div className="email_input"> 
          <input className ="rectangle" placeholder="Email" />
        </div>
      </div>
    </div>
  );
}

export default App;
