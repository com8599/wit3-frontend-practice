import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getDetails = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getDetails();
    setLoading(false);
    console.log(movie);
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.background_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          {movie.genres.map((genre) => (
            <ul>{genre}</ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default Detail;
