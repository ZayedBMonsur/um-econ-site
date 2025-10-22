import React from 'react';

/**
 * NotFound page displays when a user navigates to an undefined route.
 * It encourages visitors to return to the home page.
 */
function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center' }} data-aos="fade-up">
      <h2>404 — Page Not Found</h2>
      <p>
        Whoops! The page you’re looking for doesn’t exist. Head back to the{' '}
        <a href="/" style={{ color: 'var(--color-brown-dark)', fontWeight: 600 }}>home page</a> and start again.
      </p>
    </section>
  );
}

export default NotFound;