import { Component } from "solid-js";
import { Router as BrowserRouter, Route, Routes } from "@solidjs/router";

import { routes } from "./routes";

export const Router: Component = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component }) => (
          <Route path={path} component={component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
