import { Badge, Box, GridItem, Heading, Text } from "@hope-ui/solid";
import { Component } from "solid-js";
import { Note as NoteType } from "./NotesProvider";

type NoteProps = {
  isNew?: boolean;
} & NoteType;

export const Note: Component<NoteProps> = ({ title, text, isNew = false }) => {
  return (
    <GridItem
      w="$full"
      borderWidth="thin"
      borderColor="$accent9"
      borderRadius="$lg"
      overflow="hidden"
    >
      {/* <Box as="img" src={property.imageUrl} alt={property.imageAlt} /> */}
      <Box p="$6">
        <Box display="flex" alignItems="baseline">
          {isNew && (
            <Badge px="$2" colorScheme="primary" rounded="$full">
              New
            </Badge>
          )}
          <Box
            color="$neutral9"
            fontWeight="$bold"
            letterSpacing="$wide"
            fontSize="$xs"
            textTransform="uppercase"
            ml={isNew ? "$2" : "0"}
          >
            Created at
          </Box>
        </Box>
        <Heading mt="$1" as="h4" lineHeight="$tight" noOfLines={1}>
          {title}
        </Heading>
        <Text>{text}</Text>
      </Box>
    </GridItem>
  );
};
