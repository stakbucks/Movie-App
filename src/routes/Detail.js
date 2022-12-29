import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const DETAIL_URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;

  const getMovie = async () => {
    const response = await fetch(DETAIL_URL);
    const json = await response.json();
    setLoading(false);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {" "}
          <h1>{movie.title_long}</h1>
          <h3>{movie.rating}</h3>
          <img src={movie.large_cover_image} />
          <p>{movie.description_intro}</p>
          <div>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
