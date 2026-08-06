import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function NotFoundPage() {
  useDocumentMeta('404 | Divinityx Enterprises LLC', 'The requested page was not found.');

  return (
    <section className="rounded-2xl border border-heritage/40 bg-navy/60 p-8 shadow-halo">
      <p className="text-sm uppercase tracking-[0.2em] text-luminous">404</p>
      <h1 className="mt-2 font-heading text-4xl text-champagne">Route not found</h1>
      <p className="mt-3 text-ivory/90">The page you requested does not exist in the current public information architecture.</p>
      <div className="mt-5 flex gap-3">
        <Link to="/" className="rounded-full border border-luminous px-5 py-2 text-champagne hover:text-luminous">Home</Link>
        <Link to="/ecosystem" className="rounded-full border border-ivory/40 px-5 py-2 text-ivory hover:text-luminous">Companies & Brands</Link>
      </div>
    </section>
  );
}
