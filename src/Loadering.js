import "./styles.css";
import { Loader } from "react-loader-spinner";

const Loadering = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={160}
      width={160}
      timeout={7000}
    />
  );
};

export default Loadering;
