import { db } from "../dbConnection";
import Link from "next/link";
import { Button, Text } from "@radix-ui/themes";
import { currentUser } from "@clerk/nextjs/server";
import DeleteButton from "../deleteButtons/deletebutton";
import EditButton from "../editButton/editbutton";
import LikeButton from "../likesButton/likesSubmit";

export default async function ViewPosts({ params }) {
  const clerk_id = await params;
  const posts = await db.query(`SELECT * FROM posts`);
  const wrangledPosts = posts.rows;
  console.log(wrangledPosts);
  return (
    <div id="PostsDiv">
      {wrangledPosts.map((posts) => (
        <div key={posts.id} className="PostsPagePosts">
          <div className="PostsBackgroundDiv"></div>
          <Link href={`/user/${posts.clerk_id}`} className="PostsName">
            {posts.poster_name}
          </Link>
          <Text className="PostsBody">{posts.body}</Text>
          <Text className="Posts">Likes: {posts.likes}</Text>
          <DeleteButton params={posts} />
          <EditButton params={posts} />
          <form action={LikeButton}>
            <input type="hidden" value={posts.id} name="id"></input>
            <input type="hidden" value={clerk_id} name="clerk_id"></input>
            <Button type="submit">Like</Button>
          </form>
        </div>
      ))}
    </div>
  );
}
