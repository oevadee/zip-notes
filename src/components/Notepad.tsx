import { Button, Container, Flex, Heading } from "@hope-ui/solid";
import { Component } from "solid-js";
import { useNotes } from "./NotesProvider";

type SidebarProps = {
  openSidebar: () => void;
};

export const Notepad: Component<SidebarProps> = ({ openSidebar }) => {
  const [state] = useNotes();

  return (
    <Container border="1px solid WindowFrame">
      <Flex alignItems="center" justifyContent="space-between">
        <Heading size="3xl">Notepad</Heading>
        <Button onClick={openSidebar}>Create a note</Button>
      </Flex>
      {state.map((note) => (
        <p>{note.title}</p>
      ))}
    </Container>
  );
};
