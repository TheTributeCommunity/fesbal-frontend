import './App.scss';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu callback={() => {console.log("Button clicked")}}/>
    </div>
  );
}

export default App;
