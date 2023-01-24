import './styles/App.scss';
import Menu from './components/MenuBurger/Menu';

function App() {
  return (
    <div className="App">
      <Menu callback={() => {console.log("Button clicked")}}/>
    </div>
  );
}

export default App;
