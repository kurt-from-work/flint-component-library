/**
 * Flint Design System - Core Tokens
 * This file contains the primary hex values and configuration for the Flint Design System.
 * You can import this into your Tailwind config, theme providers, or charting libraries.
 */

export const flintTokens = {
  colors: {
    brand: {
      orange: "#F05023",
      cream: "#FAF0E1",
      dark: "#160D0E",
      darkHover: "#370D0E",
      darkAccent: "#1E0A0A",
      darkCream: "#EADECD",
      paleCream: "#FFF8EC",
      brown: "#5C3330",
      deepBrown: "#2E1515",
    },
    ui: {
      orange: {
        100: "#FED7AA",
        500: "#D8441A",
        hover: "#F05023",
        900: "#7C2D12",
      },
      red: {
        100: "#FECDD3",
        500: "#BE123C",
        hover: "#E11D48",
        900: "#881337",
      },
      blue: {
        100: "#BAE6FD",
        500: "#0369A1",
        hover: "#0EA5E9",
        900: "#0C4A6E",
      },
      green: {
        100: "#D1FAE5",
        500: "#047857",
        hover: "#10B981",
        900: "#064E3B",
      },
    },
    learning: {
      cream: "#F7EBDA",
      peach: "#F5CBA7",
      blue: "#DAE6F2",
      green: "#C5E0B4",
      mauve: "#D4A5B9",
    },
    gradients: {
      primary: "linear-gradient(135deg, #F05023 0%, #E11D48 70%, #9828D9 100%)",
      hover: "linear-gradient(135deg, #F97316 0%, #F43F5E 70%, #A855F7 100%)",
    }
  },
  typography: {
    display: "'GT Super', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
    scales: {
      h1: "2.25rem",
      h2: "1.875rem",
      h3: "1.5rem",
      h4: "1.25rem",
      base: "1rem",
      sm: "0.875rem",
      xs: "0.75rem",
    }
  },
  animation: {
    duration: "50ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    hoverScale: "1.02",
  }
};

/**
 * Helper to generate Tailwind-compatible CSS variable maps
 */
export const flintCssVars = {
  light: {
    "--background": flintTokens.colors.brand.paleCream,
    "--foreground": flintTokens.colors.brand.dark,
    "--card": flintTokens.colors.brand.paleCream,
    "--secondary": "#F2E5D5",
    "--secondary-hover": "#FBEFDF",
    "--primary": flintTokens.colors.ui.orange[500],
    "--border": "rgba(30, 10, 10, 0.1)",
  },
  dark: {
    "--background": flintTokens.colors.brand.dark,
    "--foreground": flintTokens.colors.brand.cream,
    "--card": flintTokens.colors.brand.deepBrown,
    "--secondary": flintTokens.colors.brand.brown,
    "--secondary-hover": "#7A4541",
    "--primary": flintTokens.colors.ui.orange[500],
    "--border": "rgba(255, 255, 255, 0.1)",
  }
};
