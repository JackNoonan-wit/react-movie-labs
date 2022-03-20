import React from "react";  // useState/useEffect redundant 
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TemplateMoviePage = ({ movie, children }) => {

    const { data , error, isLoading, isError } = useQuery(
      ["images", { id: movie.id }],
      getMovieImages
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const images = data.posters 
  
    return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList selectFavorite={selectFavorite} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
};

export default TemplateMoviePage;