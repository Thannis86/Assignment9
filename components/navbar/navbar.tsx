"use client";

import { Avatar, Heading, DropdownMenu } from "@radix-ui/themes";
import { useState } from "react";
import Link from "next/link";
import { Separator } from "@radix-ui/themes";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

export default function SignInNavbar() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  return (
    <main id="navbar">
      <div id="navColour"></div>
      <Link href={"/"} id="navLogo">
        <Avatar radius="full" size="6" fallback="H"></Avatar>
      </Link>
      <Heading id="navHome">Nav Bar</Heading>
      <UserButton />
      <div id="dropDownDiv">
        <SignedOut>
          <DropdownMenu.Root open={open} onOpenChange={setOpen}>
            <DropdownMenu.Trigger>
              <div role="button" id="dropDownTriggerDiv">
                <Avatar
                  size="6"
                  radius="full"
                  onClick={() => setOpen(true)}
                  fallback="Sign In"
                >
                  Options
                  <DropdownMenu.TriggerIcon />
                </Avatar>
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <Link href={"/sign-in"}>Sign In</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href={"/sign-up"}>Sign Up</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </SignedOut>
        <SignedIn>
          {" "}
          <DropdownMenu.Root open={open} onOpenChange={setOpen}>
            <DropdownMenu.Trigger>
              <div role="button" id="dropDownTriggerDiv">
                <Avatar
                  size="6"
                  radius="full"
                  onClick={() => setOpen(true)}
                  fallback="Pages"
                >
                  Options
                  <DropdownMenu.TriggerIcon />
                </Avatar>
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <Link href={"/posts"}>Posts</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href={`/user/${user?.id}`}>User Profile</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </SignedIn>
      </div>
      <Separator my=".5" size="4" id="navSep" />
    </main>
  );
}
