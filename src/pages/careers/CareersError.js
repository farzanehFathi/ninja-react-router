import { useRouteError, Link } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Go to the Home page</Link>
    </div>
  );
};

export default CareersError;
