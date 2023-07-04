export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
};

export const themeWallet = {
  colors: {
    black: "#000000",
    white: "#ffffff",

    green: "#24CCA7",
    pink: "#FF6596",
    blue: "#4A56E2",
    gray: "#BDBDBD",
    grayIcon: "#E0E0E0",
    error: "#ff0000",

    button: {
      edit: "#FFC727",
      delete: "#4A56E2",
      plus: "#24CCA7",
      active: "#24CCA7",
    },

    background: {
      white: "#ffffff",
      blurSelect: "rgba(255, 255, 255, 0.7)",
      blurTablet: "#E7EAF2",
      currency: "#4A56E2",
    },
    diagram: [
      "#FED057",
      "#FFD8D0",
      "#FD9498",
      "#C5BAFF",
      "#6E78E8",
      "#4A56E2",
      "#81E1FF",
      "#24CCA7",
      "#00AD84",
      "#000000",
    ],
    diagram2: {
      main: "#FED057",
      products: "#FFD8D0",
      car: "#FD9498",
      selfCare: "#C5BAFF",
      childCare: "#6E78E8",
      household: "#4A56E2",
      education: "#81E1FF",
      leisure: "#24CCA7",
      other: "#00AD84",
      entertainment: "#000000",
    },
  },
  space: [0, 10, 20, 30, 40, 50, 110],
  fonts: {
    main: "Circe, sans-serif",
    secondary: "Poppins, sans-serif",
  },
  fontSizes: {
    xs: "12px",
    s: "16px",
    m: "18px",
    l: "24px",
    xl: "30px",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    main: 1.5,
  },
  borders: {
    none: "none",
    normal: "1px solid #4A56E2",
    green: "1px solid #24CCA7",
  },
  radii: {
    none: "0",
    sm: "10px",
    md: "20px",
    lg: "30px",
    round: "50%",
  },
  breakpoints: {
    mob: "",
    tab: "@media screen and (min-width: 768px)",
    desc: "@media screen and (min-width: 1280px)",
  },
};
