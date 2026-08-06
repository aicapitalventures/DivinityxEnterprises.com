import { Link } from 'react-router-dom';
import { externalLinks, safeExternalRel } from '../../data/links';

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-heritage/30 bg-cosmic/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 text-sm md:grid-cols-3 md:px-8">
        <div>
          <p className="font-heading text-lg text-champagne">Divinityx Enterprises LLC</p>
          <p className="mt-2 text-ivory/85">Legal parent, operating company, and governance layer behind the enterprise portfolio.</p>
        </div>
        <div>
          <p className="font-semibold text-luminous">Quick Links</p>
          <ul className="mt-2 space-y-1 text-ivory/85">
            <li><Link className="hover:text-luminous" to="/ecosystem">Companies & Brands</Link></li>
            <li><Link className="hover:text-luminous" to="/about">About</Link></li>
            <li><Link className="hover:text-luminous" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-luminous">Corporate Contact</p>
          <p className="mt-2 text-ivory/85">Louisville, Kentucky</p>
          <a href={externalLinks.legalEmail} className="mt-1 inline-block text-champagne hover:text-luminous">corporate@divinityxenterprises.com</a>
          <p className="mt-2 text-xs text-ivory/70">
            External map links open in a new tab.
            <a
              className="ml-1 underline hover:text-luminous"
              href={externalLinks.mapQuery}
              target="_blank"
              rel={safeExternalRel}
            >
              Louisville map
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
