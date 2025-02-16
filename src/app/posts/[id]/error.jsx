"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <>
      <p>Error 404: Page not Found</p>
      <Link href={"/"}>Please click here to return home</Link>
    </>
  );
}
