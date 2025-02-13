("use client");

import { Avatar, Heading, DropdownMenu } from "@radix-ui/themes";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <main id="navbar">
      <Heading id="navHome">Nav Bar</Heading>
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger>
          <Avatar
            size="6"
            radius="full"
            onClick={() => setOpen(true)}
            fallback="V"
          >
            Options
            <DropdownMenu.TriggerIcon />
          </Avatar>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Edit</DropdownMenu.Item>
          <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
          <DropdownMenu.Item>Archive</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {/* <Avatar id="navProfile"></Avatar> */}
    </main>
  );
}
