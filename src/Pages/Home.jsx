import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const apiData = await axios.get(
          "https://movies-dfyv.onrender.com/api/getmovies",
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(apiData.data.movie);
        setMovie(apiData.data.movie);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <>

      <h1 className="text-4xl italic text-center">All Movies</h1>
      <div className="flex justify-center">
        {movie.map((e) => (
          <div key={e._id} className="p-5  w-80">
            <img src={e.imgUrl} alt="moviess" className="w-80 h-80"></img>
            <h1 className="p-5 text-center border text-2xl font-bold">Movie Name-{e.name}</h1>
            <p className="p-2 text-center border text-xl font-bold">{e.description}</p>
            <p className="p-2 text-center border text-xl font-bold">Awards-{e.awards}</p>
            <p className="p-2 text-center border text-xl font-bold">BoxOffice Collection-{e.boxOffice}</p>
            <p className="p-2 text-center border text-xl font-bold">Director-{e.director}</p>
            <p className="p-2 text-center border text-xl font-bold">Duration{e.duration} hours</p>
            <p className="p-2 text-center border text-xl font-bold">Language-{e.language}</p>
            <p className="p-2 text-center border text-xl font-bold">genre-{e.genre}</p>
            <p className="p-2 text-center border text-xl font-bold">Realease Date-{e.releaseDate}</p>
            <p className="p-2 text-center border text-xl font-bold">Realease year-{e.releaseYear}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
