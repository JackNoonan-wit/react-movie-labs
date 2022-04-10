import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import ShowListPage from "./pages/showListPage";
import MoviePage from "./pages/movieDetailsPage";
import ShowPage from "./pages/showDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import FavoriteShowsPage from "./pages/favoriteShowsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import ShowReviewPage from "./pages/showReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMovies";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import ShowsContextProvider from "./contexts/showsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import AddShowReviewPage from './pages/addShowReviewPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false 
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
        <Routes>
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/shows/favorites" element={<FavoriteShowsPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/shows/:id" element={<ShowPage />} />
          <Route path="/shows/home" element={<ShowListPage />} />
          <Route path="/movies/upcoming" element={< UpcomingMoviesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));