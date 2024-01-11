import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import type { LinksFunction, MetaFunction } from '@vercel/remix';

import stylesheet from '~/tailwind.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'Jeni Bober' },
    { name: 'Jeni Bober', content: 'My personal portfolio website!' },
  ];
};
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="container mx-auto px-[6%] my-10 max-w-[1026px]">
          <Header />
          <Outlet />
          <Footer />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
