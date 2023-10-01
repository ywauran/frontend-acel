import React from "react";
import PlaceholderImage from "../assets/images.png";

const Alumni = ({ name, email, course, batch }) => {
  return (
    <div className="shadow-xl card card-side bg-base-100">
      <figure>
        <img src={PlaceholderImage} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <ul>
          <li>{email}</li>
          <li>{course}</li>
          <li>{batch}</li>
        </ul>
      </div>
    </div>
  );
};

export default Alumni;
