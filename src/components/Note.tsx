import {
  Badge,
  Box,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Text,
} from "@hope-ui/solid";
import { Component } from "solid-js";
import { AiOutlineDelete } from "solid-icons/ai";

type NoteProps = {
  title: string;
  text: string;
  createdAt: Date;
  isNew?: boolean;
  deleteNote: () => void;
};

export const Note: Component<NoteProps> = ({
  title,
  text,
  isNew = false,
  createdAt,
  deleteNote,
}) => {
  return (
    <GridItem
      w="$full"
      borderWidth="thin"
      borderColor="$accent9"
      borderRadius="$lg"
      overflow="hidden"
    >
      <Box p="$6">
        <Box display="flex" alignItems="baseline">
          <Flex w="$full" alignItems="center" justifyContent="space-between">
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
              {createdAt.toLocaleDateString()}
            </Box>

            <IconButton
              aria-label="Delete note"
              variant="ghost"
              onClick={deleteNote}
              icon={
                <AiOutlineDelete cursor="pointer" fill="#AA2429" size={23} />
              }
            ></IconButton>
          </Flex>
        </Box>
        <Heading mt="$1" as="h4" lineHeight="$tight" noOfLines={1}>
          {title}
        </Heading>
        <Text>{text}</Text>
      </Box>
    </GridItem>
  );
};
