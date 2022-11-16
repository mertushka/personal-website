import Lanyard from "../hooks/lanyard";

import Image from "next/image";

import Logo from "../public/logo.png";

import { Rubik } from "@next/font/google";

const rubik = Rubik({
  weight: ["500", "700", "900"],
  variable: "--rubik",
  display: "swap",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

function App() {
  const [isValidating, data] = Lanyard();

  const status = !isValidating && data;

  return (
    <>
      {isValidating ? (
        <>
          <div id="profile">
            <Image
              id="avatar"
              src={Logo}
              alt="mertushka"
              priority={true}
              loading="eager"
              className="shadow-dark"
            />
            <h1 id="username" style={rubik.style}>
              mert#0006
            </h1>
            <p>Backend Developer</p>
            <div className="social-links">
              <a
                href="https://github.com/mertushka"
                aria-label="Github Profile"
                target="_blank"
              >
                <svg className="icon icon-github">
                  <use xlinkHref="#icon-github"></use>
                </svg>
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="profile">
            <Image
              id="avatar"
              src={
                "https://cdn.discordapp.com/avatars/" +
                status.discord_user.id +
                "/" +
                status.discord_user.avatar
              }
              width={128}
              height={128}
              alt="mertushka"
              priority={true}
              loading="eager"
              className="shadow-dark"
            />
            <h1 id="username" style={rubik.style}>
              {status.discord_user.username +
                "#" +
                status.discord_user.discriminator}
            </h1>
            <p>Backend Developer</p>
            <div className="social-links">
              <a
                href="https://github.com/mertushka"
                aria-label="Github Profile"
                target="_blank"
              >
                <svg className="icon icon-github">
                  <use xlinkHref="#icon-github"></use>
                </svg>
              </a>
            </div>
            {status.activities?.filter((a) => a.type !== 4)?.length !== 0 && (
              <iframe
                title="Discord Status"
                id="discord-presence"
                style={{
                  border: "none",
                  overflow: "hidden",
                  borderRadius: "10px",
                  margin: "10px",
                }}
                src="https://lanyard-visualizer.netlify.app/user/940131816692674591?background=false&title=false&mode=iframe"
                width="50%"
                height="144px"
              ></iframe>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default App;
