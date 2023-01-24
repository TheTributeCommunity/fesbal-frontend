import MenuLink from './MenuLink';
import Profile from '../SVG_images/Profile';
import Notification from '../SVG_images/Notification';
import Clock from '../SVG_images/Clock';
import VectorImg from '../SVG_images/Vector';
import Document from '../SVG_images/Paper';
import Help from '../SVG_images/Help';
import DeleteAccount from '../SVG_images/DeleteAccount';
import TurnOff from '../SVG_images/TurnOff';
import Cross from '../SVG_images/Cross';

import '../../styles/components/Menu.scss';

/**
 * TODO: Add Props to menu (vector of MenuLinkProps and Button callback)  
*/ 
export type Props =   {
  callback : Function;
}

/**
 * Creates a menu with a given function that is used on the
 * top button
 * @param {Props} param0 callback function of the button
 * @returns container with the menu
 */
const Menu = ({callback} : Props) => {
  return (
    <div className='menu'>
      <div className='title'>
        FESBAL
      </div>
      <button className='x-button' onClick={() => callback()}>{Cross()}</button>
      <div className='main-menu'>
        <MenuLink svgFile={Profile()} link="#" linkName="Perfil"/>
        <MenuLink svgFile={Notification()} link="#" linkName="Notificaciones"/>
        <MenuLink svgFile={Clock()} link="#" linkName="Histórico de recogidas"/>
        <MenuLink svgFile={VectorImg()} link="#" linkName="Punto de recogida"/>
        <MenuLink svgFile={Document()} link="#" linkName="Hoja de derivación"/>
        <MenuLink svgFile={Help()} link="#" linkName="Ayuda"/>
        <MenuLink svgFile={DeleteAccount()} link="#" linkName="Eliminar cuenta"/>
      </div>
      <div className='log-out'>
        <MenuLink svgFile={TurnOff()} link="#" linkName="Log out"/>
      </div>
    </div>
  )
}

export default Menu;