import { Container, Grid } from "@hope-ui/solid";
import { Component } from "solid-js";

import { useNotes } from "../context/NotesProvider";
import { Note } from "../components/Note";

export const NotesPage: Component = () => {
  const [state, { deleteNote }] = useNotes();

  return (
    <Container>
      <Grid
        maxW="$full"
        width="$full"
        templateColumns="repeat(2, 1fr)"
        gap="$2"
      >
        {state.map(({ id, title, text, createdAt, isNew }) => (
          <Note
            title={title}
            text={text}
            createdAt={createdAt}
            isNew={isNew}
            deleteNote={() => deleteNote(id)}
          />
        ))}
      </Grid>
    </Container>
  );
};
