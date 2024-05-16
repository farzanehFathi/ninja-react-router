import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        illum.
        <nav>
          <NavLink to="faq">Wiew FAQ</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
        </nav>
        <Outlet />
      </p>
    </div>
  );
};

export default HelpLayout;
