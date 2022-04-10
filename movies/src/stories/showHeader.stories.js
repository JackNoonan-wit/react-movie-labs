import React from "react";
import ShowHeader from "../components/headerShow";
import SampleShow from "./sampleData";

export default {
  title: "Show Details Page/ShowHeader",
  component: ShowHeader,
};

export const Basic = () => <ShowHeader show={SampleShow} />;
Basic.storyName = "Default";