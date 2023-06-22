import { HopeThemeConfig } from "@hope-ui/solid";

export const themeConfig: HopeThemeConfig = {
  initialColorMode: "system",
  // TODO: Customize light and dark theme, add theme switch support
  lightTheme: {
    colors: {
      primary1: "salmon",
      primary2: "blue",
    },
  },
  // TODO: Overwrite all components default props
  components: {
    Button: {
      defaultProps: {
        root: {
          colorScheme: "accent",
        },
      },
    },
    IconButton: {
      defaultProps: {
        colorScheme: "accent",
      },
    },
  },
};
