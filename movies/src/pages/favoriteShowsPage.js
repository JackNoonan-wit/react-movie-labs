import React, { useContext } from "react";
import PageTemplate from "../components/templateShowListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromShowFavorites from "../components/cardIcons/removeFromShowFavorites";
import WriteShowReview from "../components/cardIcons/writeShowReview";

const FavoriteShowsPage = () => {
  const {showFavorites: showIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoriteShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const shows = favoriteShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <PageTemplate
      title="Favorite Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
            <RemoveFromShowFavorites show={show} />
            <WriteShowReview show={show} />
          </>
        );
      }}
    />
  );
};

export default FavoriteShowsPage;