import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from "@hope-ui/solid";
import { Component, createSignal } from "solid-js";
import { useNotes } from "./NotesProvider";

type SidebarProps = {
  isSidebarOpen: () => boolean;
  closeSidebar: () => void;
};

export const Sidebar: Component<SidebarProps> = ({
  isSidebarOpen,
  closeSidebar,
}) => {
  const [, { addNote }] = useNotes();
  const [title, setTitle] = createSignal("");
  const [text, setText] = createSignal("");

  const handleAddNote = () => {
    try {
      if (title().length === 0 || text().length === 0) {
        throw new Error("Validation failed");
      }
      const note = {
        title: title(),
        text: text(),
        isNew: true,
        createdAt: new Date(),
      };
      addNote(note);
      closeSidebar();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Drawer opened={isSidebarOpen()} placement="left" onClose={closeSidebar}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input
            placeholder="Enter title here..."
            onInput={(e) => {
              setTitle(e.target.value);
            }}
            mb="$2"
          />
          <Input
            placeholder="Enter text here..."
            onInput={(e) => {
              setText(e.target.value);
            }}
          />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr="$3" onClick={closeSidebar}>
            Cancel
          </Button>
          <Button onClick={handleAddNote}>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
