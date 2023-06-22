/* @refresh reload */
import { render } from "solid-js/web";
import { HopeProvider } from "@hope-ui/solid";

import { App } from "./App";
import { NotesProvider } from "./context/NotesProvider";
import { themeConfig } from "./styles/theme";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <HopeProvider config={themeConfig}>
      <NotesProvider>
        <App />
      </NotesProvider>
    </HopeProvider>
  ),
  root!
);
