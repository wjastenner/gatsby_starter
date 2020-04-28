import React, { useContext } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Context } from "../context/context";
import { P } from "../typography/texts";

const About = () => {
  const state = useContext(Context);
  return (
    <Layout>
      <SEO title="About" />
      <P>
        You are on another page but the status is still{" "}
        {state.menuIsOpen ? "open" : "closed"}
      </P>
    </Layout>
  );
};

export default About;
