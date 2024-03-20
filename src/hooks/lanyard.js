import { useLanyard } from "react-use-lanyard";

import settings from "../data/discord";

const Lanyard = () => {
  const lanyard = useLanyard({
    userId: settings.discordID,
  });

  if (!settings.showPresence) return [false, false];

  const status = !lanyard.isValidating && lanyard?.data?.data;

  const isValidating = lanyard.isValidating;
  const data = status;
  return [isValidating, data];
};

export default Lanyard;
