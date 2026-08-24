import { Link } from 'react-router-dom';
import { IdentityBadge } from '../components/ecosystem/IdentityBadge';
import { portfolioRegistry } from '../data/portfolioRegistry';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import type { PortfolioRegistryEntry } from '../types/portfolio';

const divisions = portfolioRegistry.filter((entry) => entry.classification === 'Registered Operating Division');
const activeProof = portfolioRegistry.filter((entry) => ['voice-to-legacy', 'paychekx'].includes(entry.id));

function DivisionTile({ entry }: { entry: PortfolioRegistryEntry }) {
  const content = (
    <>
      <img src={entry.logoPath} alt="" className="h-24 w-full object-contain" />
      <div>
        <p className="mt-5 font-heading text-xl text-ivory">{entry.fullName}</p>
        <p className="mt-2 text-sm text-ivory/60">{entry.description}</p>
        <p className="mt-3 text-xs uppercase tracking-[.16em] text-champagne/70">{entry.classification}</p>
      </div>
    </>
  );
  const className = `division-tile division-tile--${entry.accent}`;
  return entry.destinationType === 'external' ? (
    <a
      href={entry.destinationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`Visit ${entry.fullName} website (opens in a new tab)`}
    >
      {content}
    </a>
  ) : (
    <Link to={`/ecosystem/${entry.slug}`} className={className}>
      {content}
    </Link>
  );
}

export function HomePage() {
  useDocumentMeta(
    'Divinityx Enterprises LLC | Corporate Headquarters',
    'Louisville, Kentucky parent operating company across publishing, AI and product development, automotive services, business infrastructure, and related programs.',
  );

  const parent = portfolioRegistry[0];

  return (
    <>
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Corporate headquarters · Louisville, Kentucky</p>
          <h1 className="mt-6 font-heading text-5xl leading-[1.02] text-champagne md:text-7xl">
            Enterprise Built for Legacy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75">
            Divinityx Enterprises LLC develops and operates businesses, products, and systems across publishing,
            artificial intelligence and product development, automotive services, business infrastructure, and
            related programs. The parent company provides the legal and operating foundation that keeps those
            activities organized under one enterprise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/ecosystem" className="button button--gold">
              Explore Companies & Brands
            </Link>
            <Link to="/contact" className="button">
              Corporate Contact
            </Link>
          </div>
        </div>
        <div className="hero-crest">
          <IdentityBadge entry={parent} large />
          <p className="mt-4 text-center text-xs uppercase tracking-[.25em] text-luminous/65">
            Authority · Architecture · Continuity
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="section-heading">
          <p className="eyebrow">What Divinityx does</p>
          <h2>A parent company with operating businesses—not a collection of disconnected ideas.</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Publishing & Intellectual Property', 'Author development, manuscript production, publication, catalog growth, and legacy-preservation systems.'],
            ['AI & Product Development', 'Artificial-intelligence workflows, digital products, venture development, and proprietary operating systems.'],
            ['Automotive Services', 'Mobile automotive service, diagnostics, maintenance, inspection, and customer-focused field operations.'],
            ['Business Infrastructure', 'Business-readiness, fundability, documentation, financial-clarity, and operating-system development.'],
          ].map(([title, copy]) => (
            <article className="panel" key={title}>
              <p className="eyebrow">Operating capability</p>
              <h3 className="mt-4 font-heading text-2xl text-champagne">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="section-heading">
          <p className="eyebrow">Registered operating divisions</p>
          <h2>Distinct markets. One legal and operating foundation.</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {divisions.map((entry) => (
            <DivisionTile key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="section-heading">
          <p className="eyebrow">Active operating proof</p>
          <h2>Public products and programs already in market.</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {activeProof.map((entry) => (
            <article className="panel" key={entry.id}>
              <div className="flex items-center gap-5">
                <img src={entry.logoPath} alt="" className="h-20 w-20 shrink-0 object-contain" />
                <div>
                  <p className="eyebrow">{entry.classification}</p>
                  <h3 className="mt-2 font-heading text-2xl text-champagne">{entry.fullName}</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ivory/65">{entry.description}</p>
              <div className="mt-6">
                {entry.destinationType === 'external' ? (
                  <a
                    className="text-link"
                    href={entry.destinationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${entry.fullName} website (opens in a new tab)`}
                  >
                    Visit website <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <Link className="text-link" to={`/ecosystem/${entry.slug}`}>
                    View profile <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="enterprise-band">
        <p className="eyebrow">Corporate structure</p>
        <h2 className="mt-4 font-heading text-3xl text-champagne md:text-4xl">
          Specialized enough to operate clearly.<br />Governed together enough to endure.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ivory/70">
          Divinityx Enterprises LLC is the parent operating company behind registered assumed names, operating
          brands, products, and programs. Public portfolio entries are relationship-classified so visitors can see
          what is active, what is in development, and which identities are not separate legal entities.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/about" className="button button--gold">
            About Divinityx
          </Link>
          <Link to="/ecosystem" className="button">
            View Full Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
