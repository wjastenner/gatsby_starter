import React, { useContext } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Context } from "../context/context";

import Container from "../components/boxes/container";
import { Heading, Subheading } from "../typography/headings";
import { P, Code } from "../typography/texts";

const Index = () => {
  const state = useContext(Context);

  return (
    <Layout>
      <Container bg="secondary">
        <SEO title="Home" />
        <Heading>This is a heading</Heading>
        <Subheading>This is a subheading</Subheading>
        <P>Check out some P tag</P>
        <Code>And now some code</Code>
        <P>The menu is {state.menuIsOpen ? "open" : "closed"}</P>
        <button
          onClick={() => {
            state.setMenuIsOpen(!state.menuIsOpen);
          }}
        >
          Toggle menu status
        </button>
        <Link to="about">Gatsby Link</Link>
      </Container>
    </Layout>
  );
};

export default Index;
