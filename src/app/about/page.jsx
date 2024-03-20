"use client";
import Link from "next/link";

import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["500", "700", "900"],
  variable: "--rubik",
  display: "swap",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

import { useNavContext } from "../../context/navbar";

import { me, details } from "../../data/informations";
import experience from "../../data/experience";
import skills from "../../data/skills";
import education from "../../data/education";

export default function Page() {
  const [isNavExpanded, setIsNavExpanded, isActive, setActive] =
    useNavContext();
  return (
    <>
      <div className="main-content">
        <section
          className={
            "about section" +
            (isNavExpanded ? " open " : "") +
            (isActive === "about" ? " active " : "")
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
                      I&apos;m <span>{me.name}</span>
                    </h3>
                    <p>{me.bio}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="personal-info padd-15">
                    <div className="row">
                      {details.map((item, _) => (
                        <div className="info-item padd-15" key={_}>
                          <p>
                            {item.title}:<span>{item.value}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      <div className="buttons padd-15">
                        <Link
                          href="/contact"
                          data-section-index="1"
                          style={rubik.style}
                          className="btn hire-me"
                          onClick={() => {
                            setActive("contact");
                          }}
                        >
                          Hire Me
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="skills padd-15">
                    <div className="row">
                      {skills.map((item, _) => (
                        <div className="skill-item padd-15" key={_}>
                          <h5>{item.title}</h5>
                          <div className="progress">
                            <div
                              className="progress-in"
                              style={{ width: item.value }}
                            ></div>
                            <div className="skill-percent">{item.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="education padd-15">
                    <h3 className="title">Education</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          {education.map((item, _) => (
                            <div className="timeline-item" key={_}>
                              <div className="circle-dot"></div>
                              <h6 className="timeline-date">
                                <svg className="icon icon-calendar">
                                  <use xlinkHref="#icon-calendar"></use>
                                </svg>
                                &nbsp;{item.date}
                              </h6>
                              <h4 className="timeline-title">{item.title}</h4>
                              <p className="timeline-text">{item.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="experience padd-15">
                    <h3 className="title">Experience & Internship</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          {experience.map((item, _) => (
                            <div className="timeline-item" key={_}>
                              <div className="circle-dot"></div>
                              <h6 className="timeline-date">
                                <svg className="icon icon-calendar">
                                  <use xlinkHref="#icon-calendar"></use>
                                </svg>
                                &nbsp;{item.date}
                              </h6>
                              <h4 className="timeline-title">{item.title}</h4>
                              <p className="timeline-text">{item.value}</p>
                            </div>
                          ))}
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
