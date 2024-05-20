import './Header.css';
import logo from '../../images/Logo.png';
import HeaderItem from '../HeaderItem/HeaderItem.js';

function Header() {
    return (
        <div className="header">
        <img id="zdjlogo" src={logo} alt='logo'/>
        <div className="headeritem">
        <HeaderItem props='Home'/>
        <HeaderItem props='Fluff list'/>
        <HeaderItem props='Contact us'/>
        </div>
        </div>
    )
}

export default Header;
