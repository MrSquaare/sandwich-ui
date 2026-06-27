import type { SemanticTokens, Tokens } from "@pandacss/dev";

export const tokens: Tokens = {
  colors: {},
  zIndex: {
    base: { value: 0 },
    hide: { value: -1 },
    menu: { value: 1000 },
    navigation: { value: 900 },
    tooltip: { value: 1100 },
  },
};

export const shadowTokens = {
  bold: "6px 6px 0 var(--shadow-color, {colors.shadow})",
  medium: "4px 4px 0 var(--shadow-color, {colors.shadow})",
};

export const semanticTokens: SemanticTokens = {
  colors: {
    bg: {
      DEFAULT: {
        value: {
          _dark: "#06030c",
          base: "#f9f5fe",
        },
      },
      inverted: {
        value: {
          _dark: "#f9f5fe",
          base: "#06030c",
        },
      },
    },
    border: {
      value: {
        _dark: "#38353d",
        base: "{colors.black}",
      },
    },
    danger: {
      value: "#d32a00",
    },
    info: {
      value: "#00b4d8",
    },
    primary: {
      value: "#7c3aed",
    },
    secondary: {
      value: {
        _dark: "#d9d9d9",
        base: "{colors.black}",
      },
    },
    shadow: {
      value: {
        _dark: "#38353d",
        base: "{colors.black}",
      },
    },
    success: {
      value: "#38b000",
    },
    surface: {
      value: {
        _dark: "#121018",
        base: "{colors.white}",
      },
    },
    text: {
      DEFAULT: {
        value: {
          _dark: "{colors.white}",
          base: "{colors.black}",
        },
      },
      inverted: {
        value: {
          _dark: "{colors.black}",
          base: "{colors.white}",
        },
      },
      muted: {
        value: {
          _dark: "#a6a6a6",
          base: "#808080",
        },
      },
    },
    warning: {
      value: "#ffc300",
    },
  },
  shadows: {
    bold: {
      value: shadowTokens.bold,
    },
    medium: {
      value: shadowTokens.medium,
    },
  },
};
