import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMovieStore } from '../store/useMovieStore';

export default function MovieDetails() {
  const { id } = useParams();
  const movie = useMovieStore((state) => state.selectedMovie);


  return (
    <div className="max-w-3xl p-6 text-gray-800">
      <Link to="/" className="text-gray-500 text-sm mb-6 ">
        ← Back to list
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">{movie.Title}</h1>
        <p className="text-gray-400">({movie.Year}) {movie.imdbRating} IMDb</p>
      </div>

      <img 
        className="w-full h-auto rounded border border-gray-100" 
        src={movie.Images[1]} 
      />

      <div className="space-y-6">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">story</h2>
          <p className="text-lg leading-relaxed text-gray-700">{movie.Plot}</p>
        </div>

        <div className="h-px bg-gray-100 w-full" />

        <div >
          <div>
            <span>Votes:</span>
            <span >{movie.imdbVotes}</span>
          </div>
          <div>
            <span>Metascore:</span>
            <span >{movie.Metascore}</span>
          </div>
          <div>
            <span>ID:</span>
            <span >{id}</span>
          </div>
        </div>

        <div>
          <img 
            className="w-96  rounded border border-gray-100" 
            src={movie.Images[2]} 
          />
        </div>

        <div>
          <Link 
            to="/" 
            className=" border border-gray-800 px-8 p-2 text-sm"
          >
            Back to list
          </Link>
        </div>
        <div> <Link 
                to={`/seats/${movie.imdbID}`}
                onClick={()=>{setselectedMovie(movie)}}
                className=" border border-gray-800 px-8 p-2 text-sm"
              >
                choose Seats
              </Link></div>
      </div>
    </div>
  );
}