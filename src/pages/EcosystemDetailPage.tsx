import { Link, useParams } from 'react-router-dom';
import { PageIntro } from '../components/common/PageIntro';
import { IdentityBadge } from '../components/ecosystem/IdentityBadge';
import { getEntryBySlug } from '../data/portfolioRegistry';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function EcosystemDetailPage() {
  const { slug = '' } = useParams();
  const entry = getEntryBySlug(slug);

  useDocumentMeta(
    entry ? `${entry.fullName} | Divinityx Enterprises LLC` : 'Entry Not Found | Divinityx Enterprises LLC',
    entry
      ? `${entry.fullName} classification details and relationship to Divinityx Enterprises LLC.`
      : 'Requested ecosystem entry could not be found.'
  );

  if (!entry) {
    return (
      <section className="rounded-2xl border border-rose-400/40 bg-rose-950/20 p-8">
        <h1 className="font-heading text-3xl text-champagne">Entry not found</h1>
        <p className="mt-3 text-ivory/90">The requested ecosystem entry is not available.</p>
        <Link to="/ecosystem" className="mt-5 inline-block rounded-full border border-luminous px-5 py-2 text-champagne hover:text-luminous">
          Back to Companies & Brands
        </Link>
      </section>
    );
  }

  return (
    <>
      <PageIntro eyebrow={entry.group} title={entry.fullName} copy={entry.description} />
      <section className="grid gap-6 rounded-2xl border border-heritage/45 bg-navy/65 p-6 shadow-halo lg:grid-cols-3">
        <div>
          <IdentityBadge entry={entry} />
        </div>
        <div className="space-y-3 lg:col-span-2">
          <p><span className="text-luminous">Classification:</span> {entry.classification}</p>
          <p><span className="text-luminous">Legal operator:</span> {entry.legalOperator}</p>
          <p><span className="text-luminous">Operating status:</span> {entry.operatingStatus}</p>
          <p>
            <span className="text-luminous">Registered assumed name:</span>{' '}
            {entry.registeredAssumedName ?? 'Not applicable'}
          </p>
          <p className="rounded-lg border border-heritage/40 bg-cosmic/50 p-3 text-ivory/90">{entry.disclosure}</p>
          <Link
            to="/ecosystem"
            className="inline-block rounded-full border border-crest px-5 py-2 text-champagne transition hover:border-luminous hover:text-luminous"
          >
            Back to Companies & Brands
          </Link>
        </div>
      </section>
    </>
  );
}
