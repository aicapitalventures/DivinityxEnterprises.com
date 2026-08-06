import type { ReactNode } from 'react';

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  actions?: ReactNode;
};

export function PageIntro({ eyebrow, title, copy, actions }: PageIntroProps) {
  return (
    <header className="space-y-5 pb-10">
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-crest/50 bg-navy/60 px-4 py-1 text-xs uppercase tracking-[0.2em] text-luminous">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-4xl font-heading text-4xl leading-tight text-champagne md:text-5xl">{title}</h1>
      <p className="max-w-3xl text-lg leading-relaxed text-ivory/90">{copy}</p>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </header>
  );
}
