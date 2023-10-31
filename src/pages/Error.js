import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Logo } from "../components";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <Logo />
      <div>
        <img src={img} alt="not found" />
        <h3>Page Not Found</h3>
        <p>Sorry, we could not find what you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
