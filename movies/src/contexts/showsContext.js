import React, { useState } from "react";

export const ShowsContext = React.createContext(null);

const ShowsContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favorites, setFavorites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )

  const addToFavorites = (show) => {
    let newFavorites = [...favorites];
    if (!favorites.includes(show.id)){
      newFavorites.push(show.id);
    }
    setFavorites(newFavorites)
  };
  
  const addToPlaylist = (show) => {
    let newPlaylist = [...playlist];
    if (!playlist.includes(show.id)){
      newPlaylist.push(show.id);
    }
    setPlaylist(newPlaylist);
  };
  console.log(playlist);

  const removeFromFavorites = (show) => {
    setFavorites( favorites.filter(
      (mId) => mId !== show.id
    ) )
  };

  const addReview = (show, review) => {
    setMyReviews( {...myReviews, [show.id]: review } )
  };

  return (
    <ShowsContext.Provider
      value={{
        favorites,
        addToFavorites,
        addToPlaylist,
        removeFromFavorites,
        addReview,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;