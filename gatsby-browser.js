import React from "react";
import { Provider } from "./src/context/context";
export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>;
