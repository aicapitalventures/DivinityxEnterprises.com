import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/ecosystem', label: 'Companies & Brands' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-heritage/30 bg-cosmic/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <NavLink to="/" className="font-heading text-xl text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-luminous">
          Divinityx Enterprises LLC
        </NavLink>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-luminous ${
                  isActive
                    ? 'bg-heritage/30 text-champagne'
                    : 'text-ivory/90 hover:bg-navy/70 hover:text-luminous'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
