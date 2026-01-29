import Navbar from "./Navbar";
import "../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main-content">{children}</main>
    </>
  );
};

export default Layout;
