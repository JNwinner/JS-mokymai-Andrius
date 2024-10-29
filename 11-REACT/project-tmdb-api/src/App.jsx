import React, { useState, useEffect } from 'react';
import { Search, Bookmark, BookmarkCheck, Film } from 'lucide-react';

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [savedMovies, setSavedMovies] = useState(() => {
    const saved = localStorage.getItem('savedMovies');
    return saved ? JSON.parse(saved) : [];
  });

  const API_KEY = '53c258bb52d305146e19a71e58aa2cc5';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';


  useEffect(() => {
    fetchPopularMovies();
    fetchGenres();
  }, []);

  useEffect(() => {
    if (searchTerm.length >= 2) {
      searchMovies();
    } else if (searchTerm.length === 0) {
      fetchPopularMovies();
    }
  }, [searchTerm]);

  useEffect(() => {
    if (selectedGenre) {
      fetchMoviesByGenre();
    }
  }, [selectedGenre]);

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=lt-LT&page=1`
      );
      const data = await response.json();
      setMovies(data.results.slice(0, 10));
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };


  const fetchGenres = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=lt-LT`
      );
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };


  const searchMovies = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=lt-LT&query=${searchTerm}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const fetchMoviesByGenre = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=lt-LT&with_genres=${selectedGenre}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
    }
  };

  const toggleSaveMovie = (movie) => {
    setSavedMovies((prev) => {
      const isMovieSaved = prev.some((m) => m.id === movie.id);
      if (isMovieSaved) {
        return prev.filter((m) => m.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  const isMovieSaved = (movieId) => {
    return savedMovies.some((m) => m.id === movieId);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Filmų paieška</h1>
          <div className="flex gap-4 flex-wrap">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Ieškoti filmų..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Visos kategorijos</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              {movie.poster_path ? (
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-96 object-cover"
                />
              ) : (
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                  <Film className="w-20 h-20 text-gray-400" />
                </div>
              )}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-gray-900 flex-1">
                    {movie.title}
                  </h2>
                  <button
                    onClick={() => toggleSaveMovie(movie)}
                    className="ml-2 text-gray-500 hover:text-blue-500"
                  >
                    {isMovieSaved(movie.id) ? (
                      <BookmarkCheck className="w-6 h-6" />
                    ) : (
                      <Bookmark className="w-6 h-6" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {new Date(movie.release_date).getFullYear()}
                </p>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {movie.overview || "Aprašymas nepateiktas"}
                </p>
                <div className="mt-2">
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm text-gray-600">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {savedMovies.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Išsaugoti filmai ({savedMovies.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {savedMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
                >
                  {movie.poster_path ? (
                    <img
                      src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-96 object-cover"
                    />
                  ) : (
                    <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                      <Film className="w-20 h-20 text-gray-400" />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-semibold text-gray-900 flex-1">
                        {movie.title}
                      </h2>
                      <button
                        onClick={() => toggleSaveMovie(movie)}
                        className="ml-2 text-blue-500 hover:text-gray-500"
                      >
                        <BookmarkCheck className="w-6 h-6" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {new Date(movie.release_date).getFullYear()}
                    </p>
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {movie.overview || "Aprašymas nepateiktas"}
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-sm text-gray-600">
                          {movie.vote_average.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default MovieApp;



































































































// import React, { useState, useEffect } from 'react';
// import { Search, Bookmark, BookmarkCheck, Film } from 'lucide-react';

// const MovieApp = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [genres, setGenres] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState('');
//   const [savedMovies, setSavedMovies] = useState(() => {
//     const saved = localStorage.getItem('savedMovies');
//     return saved ? JSON.parse(saved) : [];
//   });

//   const API_KEY = '53c258bb52d305146e19a71e58aa2cc5';
//   const BASE_URL = 'https://api.themoviedb.org/3';
//   const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

//   useEffect(() => {
//     fetchPopularMovies();
//     fetchGenres();
//   }, []);

//   useEffect(() => {
//     if (searchTerm.length >= 2) {
//       searchMovies();
//     } else if (searchTerm.length === 0) {
//       fetchPopularMovies();
//     }
//   }, [searchTerm]);

//   useEffect(() => {
//     if (selectedGenre) {
//       fetchMoviesByGenre();
//     }
//   }, [selectedGenre]);

//   useEffect(() => {
//     localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
//   }, [savedMovies]);

//   const fetchPopularMovies = async () => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=lt-LT&page=1`
//       );
//       const data = await response.json();
//       setMovies(data.results.slice(0, 10));
//     } catch (error) {
//       console.error('Error fetching popular movies:', error);
//     }
//   };

//   const fetchGenres = async () => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=lt-LT`
//       );
//       const data = await response.json();
//       setGenres(data.genres);
//     } catch (error) {
//       console.error('Error fetching genres:', error);
//     }
//   };

//   const searchMovies = async () => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}/search/movie?api_key=${API_KEY}&language=lt-LT&query=${searchTerm}`
//       );
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       console.error('Error searching movies:', error);
//     }
//   };

//   const fetchMoviesByGenre = async () => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=lt-LT&with_genres=${selectedGenre}`
//       );
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       console.error('Error fetching movies by genre:', error);
//     }
//   };

//   const toggleSaveMovie = (movie) => {
//     setSavedMovies((prev) => {
//       const isMovieSaved = prev.some((m) => m.id === movie.id);
//       if (isMovieSaved) {
//         return prev.filter((m) => m.id !== movie.id);
//       } else {
//         return [...prev, movie];
//       }
//     });
//   };

//   const isMovieSaved = (movieId) => {
//     return savedMovies.some((m) => m.id === movieId);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Filmų paieška</h1>
//           <div className="flex gap-4 flex-wrap">
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Ieškoti filmų..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <select
//               value={selectedGenre}
//               onChange={(e) => setSelectedGenre(e.target.value)}
//               className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Visos kategorijos</option>
//               {genres.map((genre) => (
//                 <option key={genre.id} value={genre.id}>
//                   {genre.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {movies.map((movie) => (
//             <div
//               key={movie.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
//             >
//               {movie.poster_path ? (
//                 <img
//                   src={`${IMAGE_BASE_URL}${movie.poster_path}`}
//                   alt={movie.title}
//                   className="w-full h-96 object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
//                   <Film className="w-20 h-20 text-gray-400" />
//                 </div>
//               )}
//               <div className="p-4">
//                 <div className="flex justify-between items-start mb-2">
//                   <h2 className="text-xl font-semibold text-gray-900 flex-1">
//                     {movie.title}
//                   </h2>
//                   <button
//                     onClick={() => toggleSaveMovie(movie)}
//                     className="ml-2 text-gray-500 hover:text-blue-500"
//                   >
//                     {isMovieSaved(movie.id) ? (
//                       <BookmarkCheck className="w-6 h-6" />
//                     ) : (
//                       <Bookmark className="w-6 h-6" />
//                     )}
//                   </button>
//                 </div>
//                 <p className="text-sm text-gray-600 mb-2">
//                   {new Date(movie.release_date).getFullYear()}
//                 </p>
//                 <p className="text-gray-700 text-sm line-clamp-3">
//                   {movie.overview || "Aprašymas nepateiktas"}
//                 </p>
//                 <div className="mt-2">
//                   <div className="flex items-center">
//                     <span className="text-yellow-500">★</span>
//                     <span className="ml-1 text-sm text-gray-600">
//                       {movie.vote_average.toFixed(1)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {savedMovies.length > 0 && (
//           <div className="mt-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               Išsaugoti filmai ({savedMovies.length})
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {savedMovies.map((movie) => (
//                 <div
//                   key={movie.id}
//                   className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
//                 >
//                   {movie.poster_path ? (
//                     <img
//                       src={`${IMAGE_BASE_URL}${movie.poster_path}`}
//                       alt={movie.title}
//                       className="w-full h-96 object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
//                       <Film className="w-20 h-20 text-gray-400" />
//                     </div>
//                   )}
//                   <div className="p-4">
//                     <div className="flex justify-between items-start mb-2">
//                       <h2 className="text-xl font-semibold text-gray-900 flex-1">
//                         {movie.title}
//                       </h2>
//                       <button
//                         onClick={() => toggleSaveMovie(movie)}
//                         className="ml-2 text-blue-500 hover:text-gray-500"
//                       >
//                         <BookmarkCheck className="w-6 h-6" />
//                       </button>
//                     </div>
//                     <p className="text-sm text-gray-600 mb-2">
//                       {new Date(movie.release_date).getFullYear()}
//                     </p>
//                     <p className="text-gray-700 text-sm line-clamp-3">
//                       {movie.overview || "Aprašymas nepateiktas"}
//                     </p>
//                     <div className="mt-2">
//                       <div className="flex items-center">
//                         <span className="text-yellow-500">★</span>
//                         <span className="ml-1 text-sm text-gray-600">
//                           {movie.vote_average.toFixed(1)}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MovieApp;