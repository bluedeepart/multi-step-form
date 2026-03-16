import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main className='error-page'>
      <section className='main-content'>
        <h2>404-Page not found!</h2>
        <p>This page is not the page you're looking for.</p>
        <br /><br />
        <p><Link to="/" className='btn btn-secondary'>Back to Home</Link></p>
      </section>
    </main>
  );
}

export default ErrorPage;
