import { db } from "../../../../components/dbConnection";
import { Header } from "@radix-ui/themes/components/table";
import { Button, Heading, Text } from "@radix-ui/themes";
import DeleteButton from "../../../../components/deleteButtons/deletebutton";
import EditButton from "../../../../components/editButton/editbutton";
import { currentUser } from "@clerk/nextjs/server";
import { Link } from "@radix-ui/themes";
import LikeButton from "../../../../components/likesButton/likesSubmit";
import UserLikes from "../../../../components/userStuff/userLikes";

export default async function userIDPage({ params }) {
  const postParams = await params;
  const brokenParams = await postParams.clerk_id;
  console.log(brokenParams);
  const userStuff = await db.query(
    `SELECT * FROM userstuff WHERE clerk_id=$1`,
    [brokenParams]
  );
  const wrangledUser = userStuff.rows[0];
  const user = await currentUser();
  const userPosts = await db.query(`SELECT * FROM posts WHERE clerk_id=$1`, [
    brokenParams,
  ]);

  const clerk_id = await user.id;

  const wrangledPosts = userPosts.rows;
  console.log(wrangledPosts);

  return (
    <div id="userPage">
      <div id="UserPageProfile">
        <Text id="UserPageProfileName">
          {wrangledUser.first_name} {wrangledUser.last_name}
        </Text>
        <Text>About Me:</Text>
        <Text>{wrangledUser.about_me}</Text>
        <Text>Birthday</Text>
        <Text>{wrangledUser.dob}</Text>
        {user?.id === wrangledUser.clerk_id && (
          <Link href={`/user/${wrangledUser.clerk_id}/edit`}>Edit</Link>
        )}
      </div>
      <div id="userPagePosts">
        <Heading>{wrangledUser.first_name} Posts</Heading>
        <div id="userPagePostsDiv">
          {wrangledPosts.map((posts) => (
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
      </div>
      <UserLikes params={brokenParams} />
    </div>
  );
}
