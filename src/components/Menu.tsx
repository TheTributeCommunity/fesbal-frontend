import MenuLink from './MenuLink';
import profile from '../assets/profile.svg';
import notification from '../assets/notification.svg';
import clock from '../assets/clock.svg';
import vectorImg from '../assets/vector.svg';
import document from '../assets/paper.svg';
import help from '../assets/help.svg';
import delete_account from '../assets/delete_account.svg';
import turn_off from '../assets/turn_off.svg';
import cross from '../assets/cross.svg';

import './Menu.scss'

/**
 * TODO: Add Props to menu (vector of MenuLinkProps and Button callback)  
*/ 

const Menu = () => {
  return (
    <div className='Menu'>
      <div className='Title'>
        FESBAL
      </div>
      <button id='XButton' onClick={() => {}}><img src={cross}/></button>
      <div className='MainMenu'>
        <MenuLink img={profile} link="#" linkName="Perfil"/>
        <MenuLink img={notification} link="#" linkName="Notificaciones"/>
        <MenuLink img={clock} link="#" linkName="Histórico de recogidas"/>
        <MenuLink img={vectorImg} link="#" linkName="Punto de recogida"/>
        <MenuLink img={document} link="#" linkName="Hoja de derivación"/>
        <MenuLink img={help} link="#" linkName="Ayuda"/>
        <MenuLink img={delete_account} link="#" linkName="Eliminar cuenta"/>
      </div>
      <div id='LogOut'>
        <MenuLink img={turn_off} link="#" linkName="Log out"/>
      </div>
    </div>
  )
}

export default Menu;