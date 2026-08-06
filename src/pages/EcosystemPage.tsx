import { PageIntro } from '../components/common/PageIntro';
import { PortfolioCard } from '../components/ecosystem/PortfolioCard';
import { getEntriesByGroup, portfolioGroups } from '../data/portfolioRegistry';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function EcosystemPage() {
  useDocumentMeta(
    'Our Companies & Brands | Divinityx Enterprises LLC',
    'Explore how Divinityx Enterprises LLC governs registered operating divisions, brands, platforms, and programs.'
  );

  return (
    <>
      <PageIntro
        eyebrow="Companies & Brands"
        title="Our Companies & Brands"
        copy="Divinityx Enterprises LLC is the legal parent and governance company behind a growing portfolio of registered operating divisions, brands, platforms, and programs. Every organization displayed here is identified by its actual relationship to the parent company."
      />

      <div className="space-y-10">
        {portfolioGroups.map((group) => {
          const entries = getEntriesByGroup(group);
          return (
            <section key={group} aria-labelledby={`group-${group}`}>
              <h2 id={`group-${group}`} className="mb-4 font-heading text-3xl text-champagne">
                {group}
              </h2>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {entries.map((entry) => (
                  <PortfolioCard key={entry.id} entry={entry} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
