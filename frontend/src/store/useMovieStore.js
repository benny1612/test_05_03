import { create } from 'zustand';
import axios from 'axios';

export const useMovieStore = create((set) => ({
    movies: [],
    isLoading: false,
    error: null,
    selectedMovie:null,

    fetchMovies: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get('http://localhost:3000/api/movies');

            set({ movies: response.data, isLoading: false });
        } catch (err) {
            set({ error: "faild to load movie", isLoading: false });
        }
    },
    setselectedMovie:(movie)=>set({selectedMovie:movie})
}));
