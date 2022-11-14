"use client";

import Lanyard from "./Lanyard";

export default function Page() {
  return (
    <>
      <div className="main-content">
        <section className="home section active" id="home">
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
