import { Text, Heading, Link } from "@radix-ui/themes";
import { db } from "../../../components/dbConnection";
import PostForm from "../../../components/newPostForm/postForm";

export default async function PostsPage() {
  const posts = await db.query(`SELECT * FROM posts`);
  const wrangledPosts = posts.rows;
  console.log(wrangledPosts);
  return (
    <div id="PostsPageDiv">
      <PostForm />
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
    </div>
  );
}
