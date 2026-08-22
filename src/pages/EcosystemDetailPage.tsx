import { Link, useParams } from 'react-router-dom';
import { IdentityBadge } from '../components/ecosystem/IdentityBadge';
import { getEntryBySlug } from '../data/portfolioRegistry';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function EcosystemDetailPage() {
  const { slug = '' } = useParams();
  const entry = getEntryBySlug(slug);

  useDocumentMeta(
    entry ? `${entry.fullName} | Divinityx Enterprises LLC` : 'Entry Not Found | Divinityx Enterprises LLC',
    entry?.description ?? 'Requested entry not found.',
  );

  if (!entry) {
    return (
      <div className="panel">
        <h1 className="font-heading text-4xl text-champagne">Entry not found</h1>
        <Link to="/ecosystem" className="text-link mt-5 inline-flex">Back to Companies & Brands</Link>
      </div>
    );
  }

  return (
    <div className="detail-grid">
      <IdentityBadge entry={entry} large />
      <div>
        <p className="eyebrow">{entry.classification}</p>
        <h1 className="mt-5 font-heading text-4xl leading-tight text-champagne md:text-6xl">{entry.fullName}</h1>
        <p className="mt-5 text-lg leading-relaxed text-ivory/70">{entry.description}</p>
        <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
          <div><dt>Status</dt><dd>{entry.operatingStatus === 'active' ? 'Active' : 'In development'}</dd></div>
          <div><dt>Legal operator</dt><dd>{entry.legalOperator}</dd></div>
          <div className="sm:col-span-2"><dt>Registered assumed name</dt><dd>{entry.registeredAssumedName ?? 'Not applicable'}</dd></div>
        </dl>
        <p className="mt-6 border-l-2 border-crest/50 bg-navy/45 p-4 text-sm leading-relaxed text-champagne/75">{entry.disclosure}</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          {entry.destinationType === 'external' ? (
            <a href={entry.destinationUrl} target="_blank" rel="noopener noreferrer" className="button button--gold" aria-label={`Visit ${entry.fullName} website (opens in a new tab)`}>
              Visit website <span aria-hidden className="ml-2">↗</span>
            </a>
          ) : null}
          <Link to="/ecosystem" className="text-link inline-flex">← Back to Companies & Brands</Link>
        </div>
      </div>
    </div>
  );
}
