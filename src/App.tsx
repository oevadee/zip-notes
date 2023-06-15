import type { Component } from "solid-js";

import { Container, Box, createDisclosure } from "@hope-ui/solid";
import { Notepad } from "./components/Notepad";
import { Sidebar } from "./components/Sidebar";

const App: Component = () => {
  const { isOpen, onOpen, onClose } = createDisclosure();

  return (
    <Box minH="$screenH" backgroundColor="$primary1">
      <Container centerContent>
        <Notepad openSidebar={onOpen} />
        <Sidebar isSidebarOpen={isOpen} closeSidebar={onClose} />
      </Container>
    </Box>
  );
};

export default App;
