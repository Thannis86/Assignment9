import { Text } from "@radix-ui/themes";
import { db } from "../../../../components/dbConnection";
import EditAccountForm from "../../../../components/userStuff/editAccount";
// import NewEditAccountForm from "../../../../components/userStuff/editAccount copy";
import { currentUser } from "@clerk/nextjs/server";
import { Header } from "@radix-ui/themes/components/table";

export default async function userIDPage({ params }) {
  const postParams = await params;
  const brokenParams = await postParams.clerk_id;
  console.log(brokenParams);
  const userStuff = await db.query(
    `SELECT * FROM userstuff WHERE clerk_id=$1`,
    [brokenParams]
  );
  const wrangledUser = userStuff.rows[0];

  const userPosts = await db.query(`SELECT * FROM posts WHERE poster_id=$1`, [
    wrangledUser.id,
  ]);

  const wrangledPosts = userPosts.rows;
  console.log(wrangledPosts);

  return (
    <div id="userPage">
      <div id="userPagePosts">
        <Header>{wrangledUser.first_name}s Posts</Header>
        <div id="userPagePostsDiv">
          {wrangledPosts.map((posts) => {
            <div className="posts">
              <h1>{posts.first_name}</h1>
              <p>{posts.body}</p>
              <p>Test</p>
            </div>;
          })}
        </div>
      </div>

      <EditAccountForm params={wrangledUser} />
      {/* <NewEditAccountForm params={wrangledUser} /> */}
    </div>
  );
}
