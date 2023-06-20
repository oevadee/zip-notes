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
import { Component } from "solid-js";

type SidebarProps = {
  isSidebarOpen: () => boolean;
  closeSidebar: () => void;
};

export const Sidebar: Component<SidebarProps> = ({
  isSidebarOpen,
  closeSidebar,
}) => {
  return (
    <Drawer opened={isSidebarOpen()} placement="left" onClose={closeSidebar}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr="$3" onClick={closeSidebar}>
            Cancel
          </Button>
          <Button>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
