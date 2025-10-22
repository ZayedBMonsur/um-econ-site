import React from 'react';

/**
 * Report page lists monthly economics reports produced by the society.
 * Each entry links to a PDF stored in the public folder. Update the
 * list as new reports are published.
 */
function Report() {
  // Example report list; replace file names with actual PDFs in /public/reports
  const reports = [
    { month: 'July 2025', file: '/reports/2025-07.pdf' },
    { month: 'June 2025', file: '/reports/2025-06.pdf' },
    { month: 'May 2025', file: '/reports/2025-05.pdf' }
  ];
  return (
    <section className="section" style={{ maxWidth: '800px' }} data-aos="fade-up">
      <h2>Monthly Economic Reports</h2>
      <p>Download our latest student-led publications:</p>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {reports.map(({ month, file }) => (
          <li key={month} style={{ marginBottom: '0.5rem' }}>
            <a href={file} style={{ color: 'var(--color-brown-dark)', fontWeight: 600 }} target="_blank" rel="noreferrer">
              {month}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Report;