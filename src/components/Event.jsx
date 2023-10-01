import React from "react";
import PlaceholderImage from "../assets/images.png";

const Event = ({ nameEvent, time, description }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={PlaceholderImage} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nameEvent}</h2>
        <p className="text-gray-600 font-semibold">{time}</p>
        <p className="text-base">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
