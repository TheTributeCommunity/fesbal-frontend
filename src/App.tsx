import './App.scss';
import ImageLink from './components/recipients-landing-screen/Icons_below';
import clock from './assets/clock.svg';
import location from './assets/location.svg';
import notification from './assets/notification.svg';

function App() {

  return (
    <div className="App">
      <div className="Bottom-Images">
        <ImageLink href_link='#' src_img={clock} alt='clock image'/>
        <ImageLink href_link='#' src_img={location} alt='location image'/>
        <ImageLink href_link='#' src_img={notification} alt='ring image'/>
      </div>
    </div>
  );
}

export default App;