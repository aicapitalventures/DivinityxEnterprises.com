import { Outlet } from 'react-router-dom';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-cosmic bg-cosmic text-ivory">
      <div className="pointer-events-none fixed inset-0 opacity-70" aria-hidden>
        <div className="absolute inset-0 bg-cosmic" />
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,rgba(243,203,112,0.15),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(202,143,54,0.14),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(19,21,37,0.8),transparent_35%)]" />
      </div>
      <div className="relative">
        <SiteHeader />
        <main className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
