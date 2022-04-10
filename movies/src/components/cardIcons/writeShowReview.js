import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteShowReviewIcon = ({ show }) => {
  return (
    <Link
      to={`/reviews/form`}
      state={{
          showId: show.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteShowReviewIcon;