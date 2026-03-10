import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <main>
      <Sidebar />
      <section className='main-content'>
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
