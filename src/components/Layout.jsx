import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <>
      <main>
        <Sidebar />
        <section className='main-content'>
          <h1 className='sr-only'>Multi-Step Form</h1>
          <Outlet />
        </section>
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://www.deepart.in/" target="_blank" rel="noopener noreferrer">Deepart</a>.
      </footer>
    </>
  );
}

export default Layout;
