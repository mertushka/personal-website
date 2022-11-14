"use client";

import Lanyard from "./Lanyard";

import { useNavContext } from "../context/navbar";

export default function Page() {
  const [isNavExpanded] = useNavContext();
  return (
    <>
      <div className="main-content">
        <section
          className={
            isNavExpanded ? "home section active open" : "home section active"
          }
          id="home"
        >
          <div className="container">
            <div className="intro">
              <Lanyard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
