import { Text, Heading, Link } from "@radix-ui/themes";
import { db } from "../../../../components/dbConnection";

export default async function PostsPage() {
  const posts = await db.query(`SELECT * FROM posts`);
  const wrangledPosts = posts.rows;
  console.log(wrangledPosts);
  return (
    <div id="PostsPageDiv">
      <div id="PostsDiv">
        {wrangledPosts.map((posts) => (
          <div key={posts.id} className="PostsPagePosts">
            <div className="PostsBackgroundDiv"></div>
            <Link className="PostsName">{posts.poster_name}</Link>
            <Text className="PostsBody">{posts.body}</Text>
            <Text className="Posts">Likes: {posts.likes}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}
