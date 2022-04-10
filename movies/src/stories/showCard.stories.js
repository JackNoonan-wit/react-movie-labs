import React from "react";
import ShowCard from "../components/showCard";
import SampleShow from "./sampleData";

export default {
  title: "Home Page/ShowCard",
  component: ShowCard,
};

export const Basic = () => {
  return (
    <ShowCard
      show={SampleShow}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleShow, poster_path: undefined };
  return (
    <ShowCard
      show={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";