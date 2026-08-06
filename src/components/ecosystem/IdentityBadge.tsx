import type { PortfolioRegistryEntry } from '../../types/portfolio';
const tone={gold:'brand-stage--gold',blue:'brand-stage--blue',red:'brand-stage--red',white:'brand-stage--white'} as const;
export function IdentityBadge({entry,large=false}:{entry:PortfolioRegistryEntry;large?:boolean}){return <div className={`brand-stage ${tone[entry.accent]} ${large?'brand-stage--large':''}`}><div className="brand-stage__glow"/><img src={entry.logoPath} alt={entry.logoAlt} loading="lazy" className="relative z-10 max-h-full max-w-full object-contain"/></div>}
