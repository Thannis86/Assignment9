import { db } from "../dbConnection";
import LikeButton from "../likesButton/likesSubmit";
import DeleteButton from "../deleteButtons/deletebutton";
import EditButton from "../editButton/editbutton";
import { Text, Button, Heading } from "@radix-ui/themes";

export default async function UserLikes({ params }) {
  const clerk_id = await params;
  console.log(clerk_id);
  const posts = await db.query(`SELECT *
FROM posts
WHERE id IN (SELECT post_id FROM likes_${clerk_id});`);

  const name = await db.query(`SELECT * FROM userstuff WHERE clerk_id=$1`, [
    clerk_id,
  ]);
  const brokenName = name.rows[0].first_name;
  console.log(brokenName);
  const brokenPosts = posts.rows;
  console.log(brokenPosts);
  return (
    <div id="UserPageLikes">
      <Heading>{brokenName} Likes</Heading>
      {brokenPosts.map((posts) => (
        <div key={posts.id} className="PostsPagePosts">
          <div className="PostsBackgroundDiv"></div>
          <Text className="PostsName">{posts.poster_name}</Text>
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
