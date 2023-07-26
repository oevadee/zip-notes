import { Component, For, Show } from "solid-js";
import { Container, Grid, Spinner } from "@hope-ui/solid";

import { useNotes } from "../context/NotesProvider";
import { Note } from "../components/Note";

export const NotesPage: Component = () => {
  const [data, { deleteNote }] = useNotes();

  return (
    <Container>
      <Grid
        maxW="$full"
        width="$full"
        templateColumns="repeat(2, 1fr)"
        gap="$2"
      >
        <Show when={data()} fallback={<Spinner />}>
          <For each={data()}>
            {({ slug, title, description, createdAt, isNew }) => (
              <Note
                title={title}
                text={description}
                createdAt={createdAt}
                isNew={isNew}
                deleteNote={() => deleteNote(slug)}
              />
            )}
          </For>
        </Show>
      </Grid>
    </Container>
  );
};
