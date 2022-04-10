import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [myShowReviews, setMyShowReviews] = useState( {} ) 
  const [favorites, setFavorites] = useState( [] )
  const [showFavorites, setShowFavorites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [...favorites];
    if (!favorites.includes(movie.id)){
      newFavorites.push(movie.id);
    }
    setFavorites(newFavorites)
  };

  const addToShowFavorites = (show) => {
    let newShowFavorites = [...showFavorites];
    if (!showFavorites.includes(show.id)){
      newShowFavorites.push(show.id);
    }
    setShowFavorites(newShowFavorites)
  };
  
  const addToPlaylist = (movie) => {
    let newPlaylist = [...playlist];
    if (!playlist.includes(movie.id)){
      newPlaylist.push(movie.id);
    }
    setPlaylist(newPlaylist);
  };
  console.log(playlist);

  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromShowFavorites = (show) => {
    setShowFavorites( showFavorites.filter(
      (mId) => mId !== show.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addShowReview = (show, review) => {
    setMyShowReviews( {...myShowReviews, [show.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        showFavorites,
        addToFavorites,
        addToPlaylist,
        removeFromFavorites,
        removeFromShowFavorites,
        addReview,
        addShowReview,
        addToShowFavorites,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;