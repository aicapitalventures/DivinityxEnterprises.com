import { PageIntro } from '../components/common/PageIntro';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function AboutPage() {
  useDocumentMeta(
    'About | Divinityx Enterprises LLC',
    'About Divinityx Enterprises LLC, its operating model, founder leadership, and governed portfolio structure.',
  );

  return (
    <>
      <PageIntro
        eyebrow="About Divinityx"
        title="A Kentucky operating company built to develop durable businesses and systems."
        copy="Divinityx Enterprises LLC is a manager-managed Kentucky limited liability company headquartered publicly in Louisville. It provides the legal, operating, intellectual-property, and governance foundation behind a multidisciplinary portfolio."
      />

      <section className="grid gap-6 md:grid-cols-3">
        {[
          [
            'What We Build',
            'Businesses, publishing programs, digital products, AI-enabled operating systems, automotive-service operations, business-infrastructure tools, and long-horizon intellectual property.',
          ],
          [
            'How We Operate',
            'Registered assumed names, operating brands, products, and programs are relationship-classified beneath Divinityx Enterprises LLC rather than presented as unsupported subsidiaries or separate companies.',
          ],
          [
            'Why the Structure Matters',
            'A shared parent-company foundation supports clearer governance, brand stewardship, operating continuity, records, intellectual property, and disciplined expansion across distinct markets.',
          ],
        ].map(([heading, copy]) => (
          <article className="panel" key={heading}>
            <p className="eyebrow">Corporate overview</p>
            <h2 className="mt-4 font-heading text-2xl text-champagne">{heading}</h2>
            <p className="mt-3 text-ivory/65">{copy}</p>
          </article>
        ))}
      </section>

      <section className="enterprise-band">
        <p className="eyebrow">Founder leadership</p>
        <h2 className="mt-4 font-heading text-3xl text-champagne md:text-4xl">Elijah Lee Cooley</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ivory/70">
          Elijah Lee Cooley is the founder and initial manager of Divinityx Enterprises LLC. His work centers on
          developing businesses, publishing systems, artificial-intelligence infrastructure, digital products,
          service operations, and long-term institutional assets intended to create practical and generational value.
        </p>
      </section>

      <section className="mt-20">
        <div className="section-heading">
          <p className="eyebrow">Enterprise principles</p>
          <h2>The operating standard behind the portfolio.</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ['Authority', 'Keep legal ownership, public identity, decision rights, and operating responsibility explicit.'],
            ['Architecture', 'Build repeatable systems that allow distinct divisions and products to specialize without becoming disconnected.'],
            ['Continuity', 'Preserve knowledge, brands, records, intellectual property, and operating value beyond any single project.'],
          ].map(([heading, copy]) => (
            <article className="panel" key={heading}>
              <p className="eyebrow">Enterprise principle</p>
              <h3 className="mt-4 font-heading text-2xl text-champagne">{heading}</h3>
              <p className="mt-3 text-ivory/65">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
