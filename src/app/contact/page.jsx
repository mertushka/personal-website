"use client";

import { useNavContext } from "../../context/navbar";

import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["500", "700", "900"],
  variable: "--rubik",
  display: "swap",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

import formURL from "../../data/contact";

export default function Page() {
  const [isNavExpanded, setIsNavExpanded, isActive] = useNavContext();
  return (
    <>
      <div className="main-content">
        <section
          className={
            "contact section" +
            (isNavExpanded ? " open " : "") +
            (isActive === "contact" ? " active " : "")
          }
          id="contact"
        >
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2 style={rubik.style}>Contact Me</h2>
              </div>
            </div>

            <div className="row">
              <form
                action={formURL}
                className="contact-form padd-15"
                method="POST"
              >
                <div className="row">
                  <div className="form-item col-6 padd-15">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name*"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-item col-6 padd-15">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email*"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-item col-12 padd-15">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject*"
                        name="subject"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-item col-12 padd-15">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Your Message..."
                        name="message"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 padd-15">
                    <button type="submit" style={rubik.style} className="btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
