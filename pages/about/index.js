import React, { Fragment } from "react";
import AboutComponent from "../../components/Business/AboutComponent";
import { SEO_TAGS } from "../../utils/constants";

const About = () => {
  return (
    <Fragment>
      <AboutComponent />
    </Fragment>
  );
};
export async function getServerSideProps(ctx){
  return {
    props: {
      title: SEO_TAGS.ABOUT.TITLE,
      description: SEO_TAGS.DEFAULT.DESCRIPTION,
      keywords: SEO_TAGS.DEFAULT.KEYWORDS,
    },
  };
}
export default About;
