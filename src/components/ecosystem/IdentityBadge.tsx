import type { PortfolioRegistryEntry } from '../../types/portfolio';

const tone = {
  gold: 'brand-stage--gold',
  blue: 'brand-stage--blue',
  red: 'brand-stage--red',
  white: 'brand-stage--white',
} as const;

const identityDimensions: Record<string, { width: number; height: number }> = {
  'divinityx-publishing-company': { width: 1254, height: 1254 },
  'voice-to-legacy': { width: 1400, height: 620 },
  'divinityx-manifestation': { width: 1250, height: 950 },
};

export function IdentityBadge({
  entry,
  large = false,
}: {
  entry: PortfolioRegistryEntry;
  large?: boolean;
}) {
  const master = entry.id === 'divinityx-enterprises-llc';
  const dimensions = master
    ? { width: 941, height: 1672 }
    : identityDimensions[entry.id];

  return (
    <div
      className={`brand-stage ${tone[entry.accent]} ${large ? 'brand-stage--large' : ''}`}
    >
      <div className="brand-stage__glow" />
      <img
        src={master ? '/assets/brand/divinityx-enterprises-primary.png' : entry.logoPath}
        alt={entry.logoAlt}
        width={dimensions?.width}
        height={dimensions?.height}
        loading={master ? 'eager' : 'lazy'}
        fetchPriority={master ? 'high' : 'auto'}
        className={`relative z-10 max-w-full object-contain ${
          master ? 'max-h-96' : large ? 'max-h-80' : 'max-h-40'
        }`}
      />
    </div>
  );
}
