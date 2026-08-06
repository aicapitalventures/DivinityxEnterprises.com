import { Link } from 'react-router-dom';
import type { PortfolioRegistryEntry } from '../../types/portfolio';
import { IdentityBadge } from './IdentityBadge';

type PortfolioCardProps = {
  entry: PortfolioRegistryEntry;
};

export function PortfolioCard({ entry }: PortfolioCardProps) {
  const destinationText = entry.destinationType === 'coming-soon' ? 'Coming Soon' : 'View Profile';

  return (
    <article className="group rounded-2xl border border-heritage/40 bg-gradient-to-br from-navy/70 to-cosmic/85 p-5 shadow-halo transition duration-300 hover:border-luminous/70 hover:-translate-y-0.5">
      <IdentityBadge entry={entry} />
      <div className="mt-4 space-y-3">
        <p className="text-xs uppercase tracking-[0.16em] text-luminous/90">{entry.classification}</p>
        <h3 className="font-heading text-2xl text-ivory">{entry.fullName}</h3>
        <p className="text-sm leading-relaxed text-ivory/85">{entry.description}</p>
        <p className="rounded-lg border border-heritage/40 bg-cosmic/55 p-2 text-xs leading-relaxed text-champagne/90">
          {entry.disclosure}
        </p>
        <p className="text-xs text-ivory/80">
          Relationship: <span className="font-semibold text-champagne">{entry.legalOperator}</span>
        </p>
      </div>
      <div className="mt-4">
        <Link
          to={`/ecosystem/${entry.slug}`}
          className="inline-flex items-center rounded-full border border-crest px-4 py-2 text-sm font-semibold text-champagne transition hover:border-luminous hover:text-luminous focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-luminous"
        >
          {destinationText}
        </Link>
      </div>
    </article>
  );
}
