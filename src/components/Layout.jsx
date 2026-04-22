import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <a href="#" className="btn btn-primary border-3 border-light back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
}
