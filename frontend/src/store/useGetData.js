import { useEffect } from "react";
import { useMovieStore } from './useMovieStore';

export const useGetData = () => {
    const fetchMovies = useMovieStore((state) => state.fetchMovies);
    const movies = useMovieStore((state) => state.movies);
    const isLoading = useMovieStore((state) => state.isLoading);
    const error = useMovieStore((state) => state.error);

    useEffect(() => {
        if (movies.length === 0) {
            fetchMovies();
        }
    }, []);

    return { movies, isLoading, error }; 
};
