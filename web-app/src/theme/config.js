import { createMuiTheme } from "@material-ui/core/styles";

//material ui theme- styles are set for each components
const customStyle = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: "#f7941d",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "0.925rem",
        textAlign: "center",
      },
    },
    MuiFab: {
      label: {
        fontSize: "1rem",
        textTransform: "none",
        color: "#fff",
        width: "10em",
      },
      sizeSmall: {
        height: "0.5em",
        width: "2.5em",
      },
    },
    MuiTableCell: {
      head: {
        fontSize: "0.875rem",
        fontWeight: "bold",
        color: "#000000",
      },
      body: {
        fontSize: "0.813rem",
        color: "#000000",
        fontWeight: "bold",
      },
    },

    MuiTableHead: {
      root: {
        backgroundColor: "#ffe0b2",
      },
    },
  },

  palette: {
    primary: {
      light: "#f8a33e",
      main: "#f7941d",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontSize: 14,
  },
});

export { customStyle };
