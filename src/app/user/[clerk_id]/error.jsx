"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div id="ErrorPage">
      <p>Error 404: User does not exist</p>
      <Link href={"/"}>Please click here to return home</Link>
    </div>
  );
}
