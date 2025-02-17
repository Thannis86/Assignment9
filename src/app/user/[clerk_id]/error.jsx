"use client";

import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Error({ error, reset }) {
  return (
    <div id="ErrorPage">
      <SignedIn>
        <p>Error 404: User does not exist</p>
        <Link href={"/"}>Please click here to return home</Link>
      </SignedIn>
      <SignedOut>
        <p>You cannot view a user profile without signing in</p>
        <Link href={"/"}>Please click here to return home</Link>
      </SignedOut>
    </div>
  );
}
