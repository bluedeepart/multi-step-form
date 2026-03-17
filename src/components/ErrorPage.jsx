import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main className='error-page'>
      <section className='main-content'>
        <h2>404-Page not found!</h2>
        <p>This page is not the page you're looking for.</p>
        <p>&nbsp;</p>
        <p><Link to={-1} className='btn'>Go Back</Link></p>
      </section>
    </main>
  );
}

export default ErrorPage;
