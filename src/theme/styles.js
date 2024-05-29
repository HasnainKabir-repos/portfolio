import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    other: {
      800: "#1E40AF", // Blue 700
      900: "#1E3A8A", // Blue 800
    },
    secondaryGray: {
      100: "#E2E8F0", // Gray 200
      200: "#CBD5E0", // Gray 300
      300: "#A0AEC0", // Gray 400
      400: "#718096", // Gray 500
      500: "#4A5568", // Gray 600
      600: "#2D3748", // Gray 700
      700: "#1A202C", // Gray 800
      800: "#171923", // Gray 900
      900: "#111827", // Gray 1000
    },
    navy: {
      50: "#EBF8FF", // Light blue
      100: "#BEE3F8", // Blue 100
      200: "#90CDF4", // Blue 200
      300: "#63B3ED", // Blue 300
      400: "#4299E1", // Blue 400
      500: "#3182CE", // Blue 500
      600: "#2B6CB0", // Blue 600
      700: "#2C5282", // Blue 700
      800: "#2A4365", // Blue 800
      900: "#1A365D", // Blue 900
    },
    navyBlue: {
      100: "#2A4365", // Blue 800
      200: "#1A365D", // Blue 900
      300: "#1E3A8A", // Blue 800
      400: "#1E40AF", // Blue 700
    },
    lightpeach: {
      100: "#FBD38D", // Orange 200
    },
    lightblue: {
      100: "#63B3ED", // Blue 300
    },
    gray: {
      100: "#F7FAFC", // Gray 50
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("white", "black")(props), // Light mode: Gray 400, Dark mode: Black
        fontFamily: "Roboto, sans-serif",
        fontWeight: "200",
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: "Roboto, sans-serif",
      },
      ".chakra-text": {
        "&:hover": {
          cursor: "default",
        },
      },
    }),
  },
};
