import { Component } from "solid-js";

import { NotesPage } from "../pages/NotesPage";
import { ProfilePage } from "../pages/ProfilePage";

type Route = {
  path: string;
  component: Component;
};

export const routes: Route[] = [
  {
    path: "/",
    component: NotesPage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
];
