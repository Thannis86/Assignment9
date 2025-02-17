import { currentUser } from "@clerk/nextjs/server";

import Link from "next/link";

export default async function EditButton({ params }) {
  const user = await currentUser();
  const brokenParams = await params;

  return (
    <div>
      {user?.id === brokenParams.clerk_id && (
        <Link href={`/posts/${brokenParams.id}/edit`}>Edit</Link>
      )}
    </div>
  );
}
