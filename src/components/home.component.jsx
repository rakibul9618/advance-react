import { Link } from "react-router";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        gap: "16px",
        paddingBlock: "20px",
        paddingInline: "20px",
        minHeight: "100vh",
      }}
    >
      <Link to="/container">Container</Link>
      <Link to="/controlled">Controlled</Link>
      <Link to="/uncontrolled">Uncontrolled</Link>
    </div>
  );
};

export default Home;
