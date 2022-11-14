"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const currentRoute = usePathname();

  return (
    <div className="aside">
      <div className="logo">
        <Link href="/">
          <p className="logo-text">mertushka</p>
        </Link>
      </div>

      <div className="nav-toggler">
        <span></span>
      </div>

      <ul className="nav">
        <li>
          <Link href="/" className={currentRoute === "/" ? "active" : ""}>
            <svg className="icon icon-home">
              <use xlinkHref="#icon-home"></use>
            </svg>
            &nbsp;Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={currentRoute === "/about" ? "active" : ""}
          >
            <svg className="icon icon-user">
              <use xlinkHref="#icon-user"></use>
            </svg>
            &nbsp;About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={currentRoute === "/contact" ? "active" : ""}
          >
            <svg className="icon icon-bubbles2">
              <use xlinkHref="#icon-bubbles2"></use>
            </svg>
            &nbsp;Contact
          </Link>
        </li>
      </ul>

      <div className="copyright-text">
        &copy; {new Date().getFullYear()} mertushka.codes
      </div>
    </div>
  );
}
