import Link from "next/link";

const links = [
  { href: "/", label: "HOME" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
  { href: "/login", label: "LOGIN" },
];

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-wide hover:scale-105 transition-transform duration-200"
        >
          🌿 PORTFOLIO
        </Link>

        {/* Links */}
        <ul className="flex gap-6 font-semibold">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="relative group px-2 py-1 transition-colors duration-200"
              >
                {link.label}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}