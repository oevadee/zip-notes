import type { Component } from "solid-js";

import { Container, Box, createDisclosure } from "@hope-ui/solid";
import { Notepad } from "./components/Notepad";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./modules/Header";

const App: Component = () => {
  const { isOpen, onOpen, onClose } = createDisclosure();

  return (
    <Box minH="$screenH">
      <Container centerContent>
        <Header openSidebar={onOpen} />
        <Notepad />
        <Sidebar isSidebarOpen={isOpen} closeSidebar={onClose} />
      </Container>
    </Box>
  );
};

export default App;
