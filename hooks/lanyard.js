import { useLanyard } from "react-use-lanyard";

const Lanyard = () => {
  const lanyard = useLanyard({
    userId: "940131816692674591",
  });

  const status = !lanyard.isValidating && lanyard.data.data;

  const isValidating = lanyard.isValidating;
  const data = status;
  return [isValidating, data];
};

export default Lanyard;
