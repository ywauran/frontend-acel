import React from "react";
import PlaceholderImage from "../assets/images.png";

const Event = ({ nameEvent, time, description }) => {
  return (
    <div className="shadow-xl card w-80 bg-base-100">
      <figure>
        <img src={PlaceholderImage} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nameEvent}</h2>
        <p className="font-semibold text-gray-600">{time}</p>
        <p className="text-base">{description}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
