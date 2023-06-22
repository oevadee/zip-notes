import type { Component } from "solid-js";

import { Container, Box, createDisclosure } from "@hope-ui/solid";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./modules/Header";
import { NotesPage } from "./pages/NotesPage";

export const App: Component = () => {
  const { isOpen, onOpen, onClose } = createDisclosure();

  return (
    <Box minH="$screenH">
      <Container centerContent>
        <Header openSidebar={onOpen} />
        <NotesPage />
        <Sidebar isSidebarOpen={isOpen} closeSidebar={onClose} />
      </Container>
    </Box>
  );
};
