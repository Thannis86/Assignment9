import { currentUser } from "@clerk/nextjs/server";
import { db } from "../dbConnection";
import { Button } from "@radix-ui/themes";
import editPosts from "./editPosts";

export default async function EditPage({ params }) {
  const user = await currentUser();
  const brokenParams = await params;
  const post = await db.query(`SELECT * FROM posts WHERE clerk_id = $1`, [
    brokenParams,
  ]);
  const brokenPost = post.rows[0];
  const clerkID = brokenPost.clerk_id;
  const pageID = user?.id;
  console.log(`${pageID}`);
  console.log(`${clerkID}`);

  return (
    <div>
      <h1>Hello</h1>
      {pageID === clerkID && (
        <form action={editPosts}>
          <input type="hidden" value={brokenPost.id} name="id"></input>
          <input type="text" placeholder={brokenPost.body} name="body"></input>
          <Button type="submit">Save</Button>
        </form>
      )}
    </div>
  );
}
