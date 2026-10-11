import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "صفحه اصلی", path: "/" },
    { name: "درباره ما", path: "/about" },
    { name: "خدمات آموزشی", path: "/services" },
    { name: "جامعه علمی", path: "/team" },
    { name: "تماس با ما", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/95 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-700 text-xl font-black text-white shadow-lg shadow-slate-400/30">
            K
          </div>
          <div>
            <h1 className="text-base font-extrabold tracking-tight text-slate-800">
              Kabul International
            </h1>
            <p className="text-xs font-medium text-slate-500">
              University · Education for Tomorrow
            </p>
          </div>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-200 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-2 border-b border-slate-200 bg-slate-50 p-5 shadow-lg md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-slate-700 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center lg:px-8">
        <p>
          © {new Date().getFullYear()} Kabul International University.
          Educational website concept.
        </p>
        <Link
          to="/contact"
          className="font-semibold text-slate-700 transition hover:text-blue-700"
        >
          با ما در تماس شوید ←
        </Link>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-800">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;