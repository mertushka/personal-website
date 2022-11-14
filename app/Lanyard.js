import { useLanyard } from "react-use-lanyard";

import Image from "next/image";

function App() {
  const { loading, status /*, websocket */ } = useLanyard({
    userId: "940131816692674591",
    socket: true,
  });

  return (
    <>
      {!loading && (
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
              className="shadow-dark"
            />
            <h1 id="username">
              {status.discord_user.username +
                "#" +
                status.discord_user.discriminator}
            </h1>
            <p>Backend Developer</p>
            <div className="social-links">
              <a href="https://github.com/mertushka" target="_blank">
                <svg className="icon icon-github">
                  <use xlinkHref="#icon-github"></use>
                </svg>
              </a>
            </div>
            {status.activities?.find((a) => a.type === 0) == undefined || (
              <iframe
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