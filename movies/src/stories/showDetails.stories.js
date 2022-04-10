import React from "react";
import ShowDetails from "../components/showDetails";
import SampleShow from "./sampleData";

export default {
  title: "Show Details Page/ShowDetails",
  component: ShowDetails,
};

export const Basic = () => <ShowDetails show={SampleShow} />;
Basic.storyName = "Default";