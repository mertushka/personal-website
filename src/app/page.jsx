"use client";

import Lanyard from "./Lanyard";

import { useNavContext } from "../context/navbar";

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
                <Lanyard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
