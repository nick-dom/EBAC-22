import Link from "next/link";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { href: "/", label: "Início" },
  { href: "/destinos", label: "Destinos" },
];

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <p>
          © {ano} PortalViagens — Feito para inspirar sua próxima aventura.
        </p>
        <div className={styles.footerLinks}>
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.footerLink}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
