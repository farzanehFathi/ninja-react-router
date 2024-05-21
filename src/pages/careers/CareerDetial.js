import { useLoaderData } from "react-router-dom";

const CareerDetails = () => {
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Detials for {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <h3>Details:</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sint
        voluptatum, facere consectetur ipsa fugiat error soluta nihil itaque
        quidem vitae, ex asperiores voluptate saepe nemo omnis! Ipsum, veniam
        omnis.
      </p>
    </div>
  );
};

export default CareerDetails;

// Loader
export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career!");
  }
  return res.json();
};
