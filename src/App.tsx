import { useState } from 'react';
import './App.scss';
import reactLogo from './assets/react.svg';
import notification from './assets/notification.svg'
import MenuLink from './components/MenuLink';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <MenuLink img={notification} link="#" linkName="Notificacion"/>
        <MenuLink img={reactLogo} link="https://reactjs.org" linkName="Link de REact"/>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
