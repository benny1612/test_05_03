import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetData } from '../store/useGetData';
import { useMovieStore } from '../store/useMovieStore';

export default function Home() {
  const setselectedMovie  =useMovieStore((state)=>state.setselectedMovie)
  const { movies, error } = useGetData();
  const [search, setSearch] = useState('');

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <div className="p-5 text-red-500 text-center">{error}</div>;

  return (
    <div className="bg-white min-h-screen p-4" dir="ltr">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Movie Night</h1>
          <input
            type="text"
            placeholder="Search movie"
            className="w-full border p-2 rounded outline-none focus:border-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mb-4 text-gray-600 text-sm">
          Showing {filteredMovies.length} results 
          {search && <span> for: {search}</span>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filteredMovies.map((movie) => (
            <div key={movie.imdbID} className="border p-2 rounded shadow-sm flex flex-col justify-between">
              <div>
                <img 
                  src={movie.Images[0]} 
      
                  className="w-full h-48 object-cover mb-2 rounded"
                />
                <h3 className="font-bold text-sm truncate">{movie.Title}</h3>
                <p className="text-xs text-gray-500">{movie.Year}</p>
                <p className="text-xs text-gray-400 mb-2">{movie.Genre}</p>
              </div>

              <Link 
                to={`/movie/${movie.imdbID}`}
                onClick={()=>{setselectedMovie(movie)}}
                className="block w-full text-center bg-blue-600 text-white p-4 rounded text-sm font-bold hover:bg-blue-700 "
              >
                Select Seats
              </Link>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="mt-4 text-gray-500 text-center w-full border border-dashed p-10 rounded">
            <span className="text-3xl">🍿</span>
            <br /> 
            No results
            <br />
            Try searching with a different title.
          </div>
        )}
      </div>
    </div>
  );
}
