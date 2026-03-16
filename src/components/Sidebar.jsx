import { useEffect, useState } from 'react';
import SidebarImage from '../assets/images/bg-sidebar-desktop.svg';
import SidebarMobImage from '../assets/images/bg-sidebar-mobile.svg';
import { NavLink } from 'react-router-dom';

const sidebarItems = ['Your Info', 'Select Plan', 'Add-ons', 'Summary'];

function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundImage = isMobile ? SidebarMobImage : SidebarImage;

  return (
    <aside className='sidebar' style={{ backgroundImage: `url("${backgroundImage}")` }}>
      <nav>
        <ul className='stepper-list'>
          {sidebarItems.map((item, index) => {
            const itemId = item.toLowerCase().replaceAll(' ', '-');
            return (
              <li key={itemId}>
                <NavLink
                  to={index === 0 ? '/' : itemId}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >{item}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
