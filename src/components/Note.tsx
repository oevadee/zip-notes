import { GridItem, Heading, Text } from "@hope-ui/solid";
import { Component } from "solid-js";
import { Note as NoteProps } from "./NotesProvider";

export const Note: Component<NoteProps> = ({ title, text }) => {
  return (
    <GridItem
      w="$full"
      minH="$20"
      bg="$accent8"
      borderRadius="$3xl"
      p="$4"
      color="white"
    >
      <Heading size="2xl" mb="$1">
        {title}
      </Heading>
      <Text
        size="lg"
        css={{
          overflowWrap: "break-word",
        }}
      >
        {text}
      </Text>
    </GridItem>
  );
};
