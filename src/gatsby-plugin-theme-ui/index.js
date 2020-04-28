export default {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#639",
    secondary: "#ff6347",
  },

  space: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60],

  breakpoints: [`550px`, `780px`, `1000px`, `1400px`],

  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Lato', sans-serif`,
    monospace: "Menlo, monospace",
  },

  fontSizes: [12, 16, 18, 20, 22, 24, 26, 28, 30, 36, 42, 48, 54, 60],

  fontWeights: {
    body: 400,
    heading: `bold`,
    light: 300,
    medium: 500,
    bold: `bold`,
  },

  lineHeights: [1, 1.25, 1.5, 1.75, 2],

  // https://theme-ui.com/theming#body-styles
  styles: {
    root: {
      fontFamily: `body`,
      fontWeight: `body`,
    },
  },
};
