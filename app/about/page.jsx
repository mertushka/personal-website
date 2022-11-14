"use client";
import Link from "next/link";

import { Rubik } from "@next/font/google";

const rubik = Rubik({
  weight: ["500", "700", "900"],
  variable: "--rubik",
  display: "swap",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

import { useNavContext } from "../../context/navbar";

export default function Page() {
  const [isNavExpanded] = useNavContext();
  return (
    <>
      <div className="main-content">
        <section
          className={
            isNavExpanded ? "about section active open" : "about section active"
          }
          id="about"
        >
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2 style={rubik.style}>About Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="about-content padd-15">
                <div className="row">
                  <div className="about-text padd-15">
                    <h3>
                      I'm <span>mertushka</span>
                    </h3>
                    <p>
                      I started programming at a young age and I am improving
                      myself every day.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="personal-info padd-15">
                    <div className="row">
                      <div className="info-item padd-15">
                        <p>
                          Website : <span>www.mertushka.codes</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Email : <span>mertushka@protonmail.com</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Freelance : <span>Available </span>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="buttons padd-15">
                        <Link
                          href="/contact"
                          data-section-index="1"
                          style={rubik.style}
                          className="btn hire-me"
                        >
                          Hire Me
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="skills padd-15">
                    <div className="row">
                      <div className="skill-item padd-15">
                        <h5>JavaScript</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "100%" }}
                          ></div>
                          <div className="skill-percent">100%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>HTML & CSS</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "90%" }}
                          ></div>
                          <div className="skill-percent">90%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>C#</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "90%" }}
                          ></div>
                          <div className="skill-percent">90%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>Java</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "50%" }}
                          ></div>
                          <div className="skill-percent">50%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>Python</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "30%" }}
                          ></div>
                          <div className="skill-percent">30%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="education padd-15">
                    <h3 className="title">Education</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h6 className="timeline-date">
                              <svg className="icon icon-calendar">
                                <use xlinkHref="#icon-calendar"></use>
                              </svg>
                              &nbsp;2019 - 2022
                            </h6>
                            <h4 className="timeline-title">High School</h4>
                            <p className="timeline-text">
                              I am studying at High School currently.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="experience padd-15">
                    <h3 className="title">Experience & Internship</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h6 className="timeline-date">
                              <svg className="icon icon-calendar">
                                <use xlinkHref="#icon-calendar"></use>
                              </svg>
                              &nbsp;2017
                            </h6>
                            <h4 className="timeline-title">RootBOT</h4>
                            <p className="timeline-text">
                              I coded my first multi-purpose Discord Bot named
                              RootBOT.
                            </p>
                          </div>

                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h6 className="timeline-date">
                              <svg className="icon icon-calendar">
                                <use xlinkHref="#icon-calendar"></use>
                              </svg>
                              &nbsp;2020
                            </h6>
                            <h4 className="timeline-title">Omeglecord</h4>
                            <p className="timeline-text">
                              Omeglecord had reached 500+ servers. After the
                              sanctions imposed by Discord, I did not continue
                              any further.
                            </p>
                          </div>

                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h6 className="timeline-date">
                              <svg className="icon icon-calendar">
                                <use xlinkHref="#icon-calendar"></use>
                              </svg>
                              &nbsp;2021
                            </h6>
                            <h4 className="timeline-title">haxball.js</h4>
                            <p className="timeline-text">
                              I coded a native Haxball Headless API for NodeJS.
                            </p>
                          </div>

                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h6 className="timeline-date">
                              <svg className="icon icon-calendar">
                                <use xlinkHref="#icon-calendar"></use>
                              </svg>
                              &nbsp;2022
                            </h6>
                            <h4 className="timeline-title">Personal Website</h4>
                            <p className="timeline-text">
                              Re-coded this website with NextJS 13!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
