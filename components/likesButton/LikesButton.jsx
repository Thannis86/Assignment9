import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@radix-ui/themes";
import LikeSubmit from "./likesSubmit";

export default async function LikesButton({ params }) {
  const user = await currentUser();
  const brokenParams = await params;

  return (
    <div>
      <form action={LikeSubmit}>
        <input type="hidden" value={brokenParams.id} name="id"></input>
        <input type="hidden" value={user.id} name="clerk_id"></input>
        <Button type="submit">Like</Button>
      </form>
    </div>
  );
}
