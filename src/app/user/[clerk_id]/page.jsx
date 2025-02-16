import { db } from "../../../../components/dbConnection";
import EditAccountForm from "../../../../components/userStuff/editAccount";
import { Header } from "@radix-ui/themes/components/table";
import { Text } from "@radix-ui/themes";

import Link from "next/link";

export default async function userIDPage({ params }) {
  const postParams = await params;
  const brokenParams = await postParams.clerk_id;
  console.log(brokenParams);
  const userStuff = await db.query(
    `SELECT * FROM userstuff WHERE clerk_id=$1`,
    [brokenParams]
  );
  const wrangledUser = userStuff.rows[0];

  const userPosts = await db.query(`SELECT * FROM posts WHERE clerk_id=$1`, [
    brokenParams,
  ]);

  const wrangledPosts = userPosts.rows;
  console.log(wrangledPosts);

  return (
    <div id="userPage">
      <div id="userPagePosts">
        <Header>{wrangledUser.first_name}s Posts</Header>
        <div id="userPagePostsDiv">
          {wrangledPosts.map((posts) => (
            <div key={posts.id} className="PostsPagePosts">
              <div className="PostsBackgroundDiv"></div>
              <Text className="PostsName">{posts.poster_name}</Text>
              <Text className="PostsBody">{posts.body}</Text>
              <Text className="Posts">Likes: {posts.likes}</Text>
            </div>
          ))}
        </div>
      </div>
      <EditAccountForm params={wrangledUser} />
    </div>
  );
}
