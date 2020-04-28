import styled from "styled-components";
import Flex from "./flex";

const Container = styled(Flex)``;

Container.defaultProps = {
  height: "100%",
  width: "100%",
  px: [2, 6],
  mx: "auto",
  maxWidth: "1000px",
  flexDirection: "column",
};

export default Container;
