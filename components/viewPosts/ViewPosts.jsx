import { db } from "../dbConnection";
import Link from "next/link";
import { Text } from "@radix-ui/themes";

export default async function ViewPosts() {
  const posts = await db.query(`SELECT * FROM posts`);
  const wrangledPosts = posts.rows;
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
        </div>
      ))}
    </div>
  );
}
