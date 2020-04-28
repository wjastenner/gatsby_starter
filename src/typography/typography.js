import styled from "styled-components";
import {
  compose,
  color,
  space,
  typography,
  display,
  variant,
} from "styled-system";

const Typography = styled.p`
  ${compose(color, space, typography, display)}
  /* text-transform is not included as part of the typography module in styled-system */
  text-transform: ${p => p.textTransform};

  ${variant({
    variants: {
      h1: {
        fontFamily: "heading",
        fontSize: [12],
        lineHeight: [1],
      },
      h2: {
        fontFamily: "heading",
        fontSize: [10],
        lineHeight: [2],
      },
      h3: {
        fontFamily: "heading",
      },
      h4: {
        fontFamily: "heading",
      },
      h5: {
        fontFamily: "heading",
      },
      h6: {
        fontFamily: "heading",
      },
      p: {
        fontFamily: "body",
        fontSize: [6],
        lineHeight: [3],
      },
      code: {
        fontFamily: "monospace",
        fontSize: [4],
        lineHeight: [4],
      },
    },
  })}

`;

export default Typography;
