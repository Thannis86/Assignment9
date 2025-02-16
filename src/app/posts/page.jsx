import { db } from "../../../components/dbConnection";

export default async function PostsPage() {
  const posts = await db.query(`SELECT * FROM posts`);
  const wrangledPosts = posts.rows;
  console.log(wrangledPosts);
  return (
    <div id="PostsPageDiv">
      <div id="PostsDiv">
        {wrangledPosts.map((posts) => (
          <div key={posts.id} className="PostsPagePosts">
            <p className="Posts">{posts.poster_name}</p>
            <p className="Posts">{posts.body}</p>
            <p className="Posts">Likes: {posts.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
