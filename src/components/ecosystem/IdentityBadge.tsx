import type { PortfolioRegistryEntry } from '../../types/portfolio';

type IdentityBadgeProps = {
  entry: PortfolioRegistryEntry;
};

export function IdentityBadge({ entry }: IdentityBadgeProps) {
  const accentMap = {
    gold: 'border-crest/70 bg-heritage/25 text-champagne',
    blue: 'border-sky-400/50 bg-sky-900/25 text-sky-100',
    red: 'border-rose-400/50 bg-rose-900/25 text-rose-100',
    white: 'border-stone-200/60 bg-stone-700/20 text-stone-100',
  } as const;

  return (
    <div className="flex h-24 items-center justify-center rounded-xl border border-dashed border-luminous/30 bg-cosmic/40 p-4 text-center">
      {entry.logoPath ? (
        <img
          src={entry.logoPath}
          alt={entry.logoAlt ?? `${entry.fullName} identity mark`}
          loading="lazy"
          className="max-h-full w-auto rounded object-contain"
        />
      ) : (
        <div className={`rounded-full border px-4 py-2 text-sm font-semibold ${accentMap[entry.accent]}`}>
          {entry.shortName}
        </div>
      )}
    </div>
  );
}
