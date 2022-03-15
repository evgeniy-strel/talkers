import logo from './../../img/logo.png';
import menuIcon from './../../img/icons/menu.png'

let sidebar;
window.onload = () => {
    sidebar = document.querySelector('.sidebar');
}

const Header = () => {
    return (
        <div className="wrapper">
            <header>
                <a href="/"><img src={logo} /></a>
                <img src={menuIcon} className="header_menu_icon" onClick={() => {sidebar.classList.toggle('small')}}/>
            </header>
        </div>
    )
}

export default Header; 