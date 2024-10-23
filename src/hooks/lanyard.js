import { useLanyard } from "react-use-lanyard";

import settings from "../data/discord";

const Lanyard = () => {
  if (!settings.lanyard.enabled) return [true, false];

  // eslint-disable-next-line
  const lanyard = useLanyard({
    userId: settings.discordID,
  });

  const status = !lanyard.isValidating && lanyard?.data?.data;

  const isValidating = lanyard.isValidating;
  const data = status;
  return [isValidating, data];
};

export default Lanyard;
