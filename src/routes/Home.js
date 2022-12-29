import { useState, useEffect } from "react";
import Movies from "../components/Movies";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const URL =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
  const getMovies = async () => {
    const json = await (await fetch(URL)).json();
    setLoading(false);
    setMovieList(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <ul>
            {movieList.map((movie) => (
              <Movies
                id={movie.id}
                key={movie.id}
                title={movie.title}
                rating={movie.rating}
                coverImage={movie.medium_cover_image}
                genreList={movie.genres}
                summary={movie.summary}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
