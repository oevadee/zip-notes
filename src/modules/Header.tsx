import { Button, Flex, Heading } from "@hope-ui/solid";
import { Component } from "solid-js";

type HeaderProps = {
  openSidebar: () => void;
};

export const Header: Component<HeaderProps> = ({ openSidebar }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" w="$full" py="$4">
      <Heading size="4xl">Notepad</Heading>
      <Button bg="$accent8" onClick={openSidebar}>
        Create a note
      </Button>
    </Flex>
  );
};
