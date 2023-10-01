import React from "react";
import PlaceholderImage from "../assets/images.png";

const Alumni = ({ name, email, course, batch }) => {
  return (
    <div className="w-64 shadow-xl card bg-base-100">
      <figure>
        <img src={PlaceholderImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
