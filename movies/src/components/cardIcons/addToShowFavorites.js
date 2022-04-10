import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToShowFavoritesIcon = ({ show }) => {
  const context = useContext(MoviesContext);

  const handleAddToShowFavorites = (e) => {
    e.preventDefault();
    context.addToShowFavorites(show);
  };

  return (
    <IconButton aria-label="add to show favorites" onClick={handleAddToShowFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToShowFavoritesIcon;
