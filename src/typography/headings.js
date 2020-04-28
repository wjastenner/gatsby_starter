import styled from "styled-components";
import Typography from "./typography";

export const Heading = styled(Typography)``;

Heading.defaultProps = {
  as: `h1`,
  variant: `h1`,
};

export const Subheading = styled(Typography)``;

Subheading.defaultProps = {
  as: `h2`,
  variant: `h2`,
};
