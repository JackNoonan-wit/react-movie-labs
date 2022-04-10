import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromShowFavoritesIcon = ({ show }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromShowFavorites = (e) => {
    e.preventDefault();
    context.removeFromShowFavorites(show);
  };
  return (
    <IconButton
      aria-label="remove from show favorites"
      onClick={handleRemoveFromShowFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromShowFavoritesIcon;