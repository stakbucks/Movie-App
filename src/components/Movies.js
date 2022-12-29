import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movies({ id, title, rating, coverImage, summary, genreList }) {
  return (
    <li>
      <h1>{title}</h1>
      <h3>{rating}</h3>
      <img src={coverImage} />
      <div>
        <Link to={`/movies/${id}`}>See details</Link>
      </div>
    </li>
  );
}

Movies.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
};

export default Movies;
