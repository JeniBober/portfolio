import { Link, NavLink } from '@remix-run/react';

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link to="/">
        <h1 className="text-3xl font-bold">Jeni.</h1>
      </Link>
      <nav>
        <ul className="flex">
          <li className="mx-2">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="mx-2">
            <a href="/assets/resume.pdf" className="hover:border-b-2 border-black">
              Resume
            </a>
          </li>
          <li className="mx-2">
            <a
              href="mailto:boberjeni@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:border-b-2 border-black"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
