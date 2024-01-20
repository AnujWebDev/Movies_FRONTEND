import React, { useState } from 'react';
import axios from 'axios';

const AddMovies = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [awards, setAwards] = useState("");
  const [boxOffice, setBoxOffice] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const apiData = await axios.post(
        "https://movies-dfyv.onrender.com/api/addmovie",
        {
          imgUrl,
          name,
          description,
          awards,
          boxOffice,
          director,
          duration,
          language,
          genre,
          releaseDate,
          releaseYear,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(apiData);
      setImgUrl("");
      setName("");
      setDescription("");
      setAwards("");
      setBoxOffice("");
      setDirector("");
      setDuration("");
      setLanguage("");
      setGenre("");
      setReleaseDate("");
      setReleaseYear("");
    } catch (error) {
      console.error("Error submitting movie:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Movie</h2>
      <form className="space-y-4" onSubmit={submitHandler}>
        <div>
          <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-600">
            Image Url
          </label>
          <input
            type="text"
            id="imgUrl"
            name="imageUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter movie image URL"
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter movie name"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter movie description"
          />
        </div>

        <div>
          <label htmlFor="awards" className="block text-sm font-medium text-gray-600">
            Awards
          </label>
          <input
            type="text"
            id="awards"
            name="awards"
            value={awards}
            onChange={(e) => setAwards(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter movie awards"
          />
        </div>

        <div>
          <label htmlFor="boxOffice" className="block text-sm font-medium text-gray-600">
            BoxOffice Collection
          </label>
          <input
            type="text"
            id="boxOffice"
            name="boxOffice"
            value={boxOffice}
            onChange={(e) => setBoxOffice(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter movie box office collection"
          />
        </div>

        <div>
          <label htmlFor="director" className="block text-sm font-medium text-gray-600">
            Director
          </label>
          <input
            type="text"
            id="director"
            name="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter movie director"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-600">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter movie duration"
          />
        </div>

        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-600">
            Language
          </label>
          <input
            type="text"
            id="language"
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter movie language"
          />
        </div>

        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-600">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter movie genre"
          />
        </div>

        <div>
          <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-600">
            Release Date
          </label>
          <input
            type="text"
            id="releaseDate"
            name="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter movie release date"
          />
        </div>

        <div>
          <label htmlFor="releaseYear" className="block text-sm font-medium text-gray-600">
            Release Year
          </label>
          <input
            type="text"
            id="releaseYear"
            name="releaseYear"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter movie release year"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
