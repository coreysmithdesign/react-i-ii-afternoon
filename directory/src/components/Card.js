import React from "react";

export default function Card(props) {
  let faves = props.person.favoriteMovies.map((movie, index) => {
    return (
      <li key={index}>
        {index + 1}. {movie}
      </li>
    );
  });

  console.log("card ", props);

  return (
    <div className="Card">
      <div className="User-controls">
        <h1 className="card-title">
          {props.person.name.first} {props.person.name.last}
        </h1>

        <span className="card-count">
          {props.person.id}/{props.indexTotal}
        </span>

        <ul className="card-list">
          <li>
            <span>From:</span>
            {props.person.city}, {props.person.country}
          </li>
          <li>
            <span>Job Title:</span>
            {props.person.title}
          </li>
          <li>
            <span>Employer:</span>
            {props.person.employer}
          </li>
        </ul>

        <h2>Favorite Movies</h2>
        <ul className="card-list">{faves}</ul>
      </div>
    </div>
  );
}
