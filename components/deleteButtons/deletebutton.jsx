import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@radix-ui/themes";
import DeletePosts from "./deleteposts";

export default async function DeleteButton({ params }) {
  const user = await currentUser();
  const brokenParams = await params;

  return (
    <div>
      <h1></h1>
      {user?.id === brokenParams.clerk_id && (
        <form action={DeletePosts}>
          <input type="hidden" value={brokenParams.id} name="id"></input>
          <Button type="submit">Delete</Button>
        </form>
      )}
    </div>
  );
}
