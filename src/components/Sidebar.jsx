import { useEffect, useState } from 'react';
import SidebarImage from '../assets/images/bg-sidebar-desktop.svg';
import SidebarMobImage from '../assets/images/bg-sidebar-mobile.svg';

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
    <div className='sidebar' style={{ backgroundImage: `url("${backgroundImage}")` }}>
      <ul className='stepper-list'>
        <li className='active'>Your Info</li>
        <li>Select Plan</li>
        <li>Add-ons</li>
        <li>Summary</li>
      </ul>
    </div>
  );
}

export default Sidebar;
