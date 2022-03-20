import { NavLink } from 'react-router-dom';

const isActiveLink = a => a.isActive ? 'sidebar_active_tab' : '';

const Sidebar = () => {
    return (
        <div className="sidebar small">
            <ul>
                <li className='sidebar_profile'><NavLink to="/" className={isActiveLink}><span>Профиль</span></NavLink><span>Профиль</span></li>
                <li className='sidebar_messages'><NavLink to="/messages" className={isActiveLink}><span>Сообщения</span></NavLink><span>Сообщения</span></li>
                <li className='sidebar_news'><NavLink to="/news" className={isActiveLink}><span>Новости</span></NavLink><span>Новости</span></li>
                <li className='sidebar_music'><NavLink to="/music" className={isActiveLink}><span>Музыка</span></NavLink><span>Музыка</span></li>
                <li className='sidebar_settings'><NavLink to="/settings" className={isActiveLink}><span>Настройки</span></NavLink><span>Настройки</span></li>
            </ul>
        </div>
    )
}

export default Sidebar;