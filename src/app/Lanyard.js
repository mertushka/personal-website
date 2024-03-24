import Lanyard from "../hooks/lanyard";

import Image from "next/image";

import Logo from "../../public/logo.webp";

import { Rubik } from "next/font/google";

import { me } from "../data/informations";

import github from "../data/github";
import settings from "../data/discord";

const rubik = Rubik({
  weight: ["500", "700", "900"],
  variable: "--rubik",
  display: "swap",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

function App() {
  const [isValidating, data] = Lanyard();

  const status = settings.showPresence && !isValidating && data;

  return (
    <>
      {isValidating || !status ? (
        <>
          <Image
            id="avatar"
            src={Logo}
            alt={me.nickname}
            priority={true}
            className="shadow-dark"
          />
          <h1 id="username" style={rubik.style}>
            {me.nickname}
          </h1>
          <p>{me.status}</p>

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
        </>
      ) : (
        <>
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
            alt={me.nickname}
            priority={true}
            className="shadow-dark"
          />
          <h1 id="username" style={rubik.style}>
            {status.discord_user.username +
              "#" +
              status.discord_user.discriminator}
          </h1>
          <p>{me.status}</p>

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
              src={`https://lanyard.mertushka.pw/user/${status.discord_user.id}?background=false&title=false&mode=iframe`}
              width="50%"
              height="144px"
            ></iframe>
          )}
        </>
      )}
    </>
  );
}

export default App;
