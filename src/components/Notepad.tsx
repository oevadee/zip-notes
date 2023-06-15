import { Box, Button, Container, Flex, Heading } from "@hope-ui/solid";
import { Component } from "solid-js";

type SidebarProps = {
  openSidebar: () => void;
};

export const Notepad: Component<SidebarProps> = ({ openSidebar }) => {
  return (
    <Container border="1px solid WindowFrame">
      <Flex alignItems="center" justifyContent="space-between">
        <Heading size="3xl">Notepad</Heading>
        <Button onClick={openSidebar}>Create a note</Button>
      </Flex>
    </Container>
  );
};
