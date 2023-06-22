import type { Component } from "solid-js";
import { Container, createDisclosure } from "@hope-ui/solid";

import { Sidebar } from "./components/Sidebar";
import { Header } from "./modules/Header";
import { Router } from "./router";

export const App: Component = () => {
  const { isOpen, onOpen, onClose } = createDisclosure();

  return (
    <Container minH="$screenH">
      <Header openSidebar={onOpen} />
      <Router />
      <Sidebar isSidebarOpen={isOpen} closeSidebar={onClose} />
    </Container>
  );
};
