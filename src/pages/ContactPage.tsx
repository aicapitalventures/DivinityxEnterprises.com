import { PageIntro } from '../components/common/PageIntro';
import { externalLinks, safeExternalRel } from '../data/links';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ContactPage() {
  useDocumentMeta(
    'Contact | Divinityx Enterprises LLC',
    'Corporate contact details for Divinityx Enterprises LLC in Louisville, Kentucky.'
  );

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Corporate Office Contact"
        copy="For corporate inquiries, use the official contact information below. This website does not host intake forms or backend messaging services."
      />
      <section className="max-w-3xl rounded-2xl border border-heritage/50 bg-navy/60 p-6 shadow-halo">
        <p className="font-heading text-2xl text-champagne">Divinityx Enterprises LLC</p>
        <p className="mt-2 text-lg text-ivory/90">Louisville, Kentucky</p>
        <a
          href={externalLinks.legalEmail}
          className="mt-4 inline-block rounded-full border border-luminous px-5 py-2 font-semibold text-champagne transition hover:bg-heritage/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-luminous"
        >
          corporate@divinityxenterprises.com
        </a>
        <p className="mt-4 text-sm text-ivory/80">
          Map reference:
          <a
            href={externalLinks.mapQuery}
            target="_blank"
            rel={safeExternalRel}
            className="ml-1 underline hover:text-luminous"
          >
            Louisville, Kentucky
          </a>
        </p>
      </section>
    </>
  );
}
