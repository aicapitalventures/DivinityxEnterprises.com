import { Link } from 'react-router-dom';
import { PageIntro } from '../components/common/PageIntro';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function HomePage() {
  useDocumentMeta(
    'Divinityx Enterprises LLC | Corporate Headquarters',
    'Divinityx Enterprises LLC is the legal parent, operating company, and governance layer behind its companies and brands.'
  );

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Divinityx Enterprises LLC',
    legalName: 'Divinityx Enterprises LLC',
    email: 'corporate@divinityxenterprises.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Louisville',
      addressRegion: 'KY',
      addressCountry: 'US',
    },
    url: typeof window !== 'undefined' ? window.location.origin : 'https://divinityxenterprises.com',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <PageIntro
        eyebrow="Corporate Headquarters"
        title="One Governance Layer. Many Market-Facing Organizations."
        copy="Divinityx Enterprises LLC is the legal parent, operating company, and institutional governance layer behind registered operating divisions, brands, platforms, and programs."
        actions={
          <>
            <Link
              to="/ecosystem"
              className="rounded-full border border-luminous bg-heritage/25 px-6 py-3 font-semibold text-champagne transition hover:bg-heritage/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-luminous"
            >
              Explore Companies & Brands
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-ivory/45 px-6 py-3 font-semibold text-ivory transition hover:border-luminous hover:text-luminous focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-luminous"
            >
              Contact Corporate Office
            </Link>
          </>
        }
      />

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-heritage/40 bg-navy/55 p-5 shadow-halo">
          <h2 className="font-heading text-2xl text-champagne">Legal Authority</h2>
          <p className="mt-3 text-ivory/90">Portfolio entities are shown by verified relationship type, not assumed legal status.</p>
        </article>
        <article className="rounded-2xl border border-heritage/40 bg-navy/55 p-5 shadow-halo">
          <h2 className="font-heading text-2xl text-champagne">Operating Precision</h2>
          <p className="mt-3 text-ivory/90">Registered divisions, operating brands, programs, and initiatives are grouped with controlled language.</p>
        </article>
        <article className="rounded-2xl border border-heritage/40 bg-navy/55 p-5 shadow-halo">
          <h2 className="font-heading text-2xl text-champagne">Public Clarity</h2>
          <p className="mt-3 text-ivory/90">Visitors can inspect each entry with classification, operator relationship, and current status.</p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-luminous/50 bg-gradient-to-r from-navy/80 via-cosmic/80 to-navy/80 p-7">
        <h2 className="font-heading text-3xl text-champagne">How the Enterprise Fits Together</h2>
        <p className="mt-4 max-w-4xl text-lg leading-relaxed text-ivory/90">
          Divinityx Enterprises LLC provides the legal, operational, intellectual-property, and governance foundation supporting its operating divisions and brands. Each division serves a distinct market while remaining part of one coordinated enterprise.
        </p>
      </section>
    </>
  );
}
