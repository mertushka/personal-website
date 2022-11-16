"use client";

import Lanyard from "./Lanyard";

import { useNavContext } from "../context/navbar";

import github from "../data/github";

export default function Page() {
  const [isNavExpanded, setIsNavExpanded, isActive] = useNavContext();
  return (
    <>
      <div className="main-content">
        <section
          className={
            "home section" +
            (isNavExpanded ? " open " : "") +
            (isActive === "home" ? " active " : "")
          }
          id="home"
        >
          <div className="container">
            <div className="intro">
              <div id="profile">
                <div className="social-links">
                  <a
                    href={github}
                    aria-label="Github Profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="icon icon-github">
                      <use xlinkHref="#icon-github"></use>
                    </svg>
                  </a>
                </div>
                <Lanyard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
