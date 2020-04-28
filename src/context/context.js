import React, { createContext, useState } from "react";

const defaultState = {
  menuIsOpen: false,
  setMenuIsOpen: () => {},
};

export const Context = createContext(defaultState);

export const Provider = props => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const state = { menuIsOpen, setMenuIsOpen };
  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
