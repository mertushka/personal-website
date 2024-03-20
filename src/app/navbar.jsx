"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavContext } from "../context/navbar";

import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["500", "700", "900"],
  variable: "--rubik",
  display: "swap",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

import { me } from "../data/informations";

export default function Nav() {
  const currentRoute = usePathname();
  const [isNavExpanded, setIsNavExpanded, isActive, setActive] =
    useNavContext();

  return (
    <div className={isNavExpanded ? "aside open" : "aside"}>
      <div className="logo">
        <Link
          href="/"
          style={rubik.style}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            setActive("home");
          }}
        >
          <p className="logo-text">{me.nickname}</p>
        </Link>
      </div>

      <div
        className={isNavExpanded ? "nav-toggler open" : "nav-toggler"}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <span></span>
      </div>

      <ul className={isNavExpanded ? "nav open" : "nav"}>
        <li>
          <Link
            href="/"
            className={currentRoute === "/" ? "active" : ""}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setActive("home");
            }}
          >
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
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setActive("about");
            }}
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
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setActive("contact");
            }}
          >
            <svg className="icon icon-bubbles2">
              <use xlinkHref="#icon-bubbles2"></use>
            </svg>
            &nbsp;Contact
          </Link>
        </li>
      </ul>

      <div className="copyright-text">
        &copy; {new Date().getFullYear()} {me.nickname}
      </div>
    </div>
  );
}
