import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Container from "./Container";
import { nav, shortDisclaimer } from "../data/content";
import logoLight from "../assets/logo-light.png";

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.84v2.05h.05c.53-1 1.85-2.05 3.8-2.05 4.06 0 4.81 2.67 4.81 6.15V23h-4v-6.75c0-1.61-.03-3.68-2.24-3.68-2.25 0-2.6 1.75-2.6 3.56V23h-4V8z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sopconnect",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.02-3.58.07-4.85C2.38 3.85 3.9 2.31 7.15 2.16 8.42 2.1 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/legal/privacy-policy" },
  { label: "Cookie Policy", to: "/legal/cookie-policy" },
  { label: "Terms & Conditions", to: "/legal/terms" },
  { label: "Refund & Cancellation Policy", to: "/legal/refund-policy" },
  { label: "Accessibility Statement", to: "/legal/accessibility" },
  { label: "Service Disclaimer", to: "/legal/disclaimer" },
  { label: "Complaints Procedure", to: "/legal/complaints" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-paper">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block">
              <img src={logoLight} alt="SOPConnect Consultancy" className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              Career development, professional training, educational support
              and considered business, cultural and community events.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-paper/70 transition-colors hover:text-secondary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-base text-paper">Sitemap</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-paper/70 transition-colors hover:text-secondary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-paper">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-paper/70 transition-colors hover:text-secondary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-paper">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-paper/70">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-secondary" />
                <a href="mailto:info@sopconnectconsultltd.com" className="transition-colors hover:text-secondary">
                  info@sopconnectconsultltd.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-secondary" />
                <a href="tel:+447469927395" className="transition-colors hover:text-secondary">
                  +44 7469 927395
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                <span>M56 Hub, 64 Chorley Road, Swinton, Manchester, M27 5AD</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/15 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-paper/60">
            {shortDisclaimer}
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} SOPConnect Consultancy Limited. All rights reserved.</span>
            <span>Registered in England &amp; Wales · Company No. 00000000</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
