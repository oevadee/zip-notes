/* @refresh reload */
import { render } from "solid-js/web";
import { HopeProvider, HopeThemeConfig } from "@hope-ui/solid";

import App from "./App";
import { NotesProvider } from "./components/NotesProvider";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const config: HopeThemeConfig = {
  initialColorMode: "system",
  lightTheme: {
    colors: {
      primary1: "salmon",
      primary2: "blue",
    },
  },
  components: {
    Button: {
      defaultProps: {
        root: {
          colorScheme: "accent",
        },
      },
    },
  },
};

render(
  () => (
    <HopeProvider config={config}>
      <NotesProvider>
        <App />
      </NotesProvider>
    </HopeProvider>
  ),
  root!
);
