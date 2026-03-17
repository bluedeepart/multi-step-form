import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <>
      <main>
        <Sidebar />
        <section className='main-content'>
          <Outlet />
        </section>
      </main>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://www.deepart.in/" target="_blank" rel="noopener noreferrer">Deepart</a>.
      </div>
    </>
  );
}

export default Layout;
