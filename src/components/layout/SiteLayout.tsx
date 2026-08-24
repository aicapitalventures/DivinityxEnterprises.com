import { Outlet } from 'react-router-dom';import { SiteFooter } from './SiteFooter';import { SiteHeader } from './SiteHeader';
export function SiteLayout(){return <div className="site-shell min-h-screen text-ivory"><SiteHeader/><main className="relative mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16"><Outlet/></main><SiteFooter/></div>}
