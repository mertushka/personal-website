import { useLanyard } from "react-use-lanyard";

import id from "../data/discord";

const Lanyard = () => {
  const lanyard = useLanyard({
    userId: id,
  });

  const status = !lanyard.isValidating && lanyard.data.data;

  const isValidating = lanyard.isValidating;
  const data = status;
  return [isValidating, data];
};

export default Lanyard;
