import React from "react";
import Typography from "@mui/material/Typography";

const ShowReview =  ({ review }) => {
  return (
    <>
        <Typography variant="h6" component="p">
            Review By: {review.author}
        </Typography>
        <Typography component="p">
            {review.content}
        </Typography>
    </>
  );
};
export default ShowReview