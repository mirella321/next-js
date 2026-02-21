import Link from "next/link";

const links = [
    {href: "/", label: "HOME"},
    {href: "/blog", label: "BLOG"},
    {href: "/contact", label: "CONTACT"},
    {href: "/login", label: "LOGIN"}
];

export default function Navbar() {

    return (
        <nav>
            <Link href="/">PORTFOLIO</Link>

            <ul>
                { links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href}>
                        {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}