import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        obcaecati dolorem totam atque autem! Cum ipsam quas rem, et dolor
        maxime, magni amet culpa deserunt, doloremque totam soluta porro sed.
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
};

export default NotFound;
