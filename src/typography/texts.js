import styled from "styled-components";
import Typography from "./typography";

export const P = styled(Typography)``;

P.defaultProps = {
  as: `p`,
  variant: `p`,
};

export const Code = styled(Typography)``;

Code.defaultProps = {
  as: `code`,
  variant: `code`,
};
