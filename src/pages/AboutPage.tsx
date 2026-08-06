import { PageIntro } from '../components/common/PageIntro';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function AboutPage() {
  useDocumentMeta(
    'About | Divinityx Enterprises LLC',
    'About Divinityx Enterprises LLC and its institutional governance role across divisions and brands.'
  );

  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Corporate Governance and Enterprise Direction"
        copy="Divinityx Enterprises LLC exists to coordinate long-horizon ventures across publishing, AI venture development, automotive services, and mission-aligned initiatives through one legal and operational foundation."
      />
      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-heritage/40 bg-navy/55 p-6">
          <h2 className="font-heading text-2xl text-champagne">What This Website Represents</h2>
          <p className="mt-3 text-ivory/90">This is the official corporate headquarters and relationship directory. It does not present legal or financial claims beyond governed records.</p>
        </article>
        <article className="rounded-2xl border border-heritage/40 bg-navy/55 p-6">
          <h2 className="font-heading text-2xl text-champagne">Portfolio Clarity Rules</h2>
          <p className="mt-3 text-ivory/90">Entries are displayed by verified classification: parent company, registered operating division, operating brand, platform, program, media property, or developing initiative.</p>
        </article>
      </section>
    </>
  );
}
