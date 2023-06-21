import { Container, Grid } from "@hope-ui/solid";
import { Component } from "solid-js";
import { useNotes } from "./NotesProvider";
import { Note } from "./Note";

export const Notepad: Component = () => {
  const [state] = useNotes();

  return (
    <Container border="1px solid WindowFrame">
      <Grid
        maxW="$full"
        width="$full"
        templateColumns="repeat(2, 1fr)"
        gap="$2"
      >
        {state.map(({ title, text }) => (
          <Note title={title} text={text} />
        ))}
      </Grid>
    </Container>
  );
};
