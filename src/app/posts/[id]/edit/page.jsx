import { db } from "../../../../../components/dbConnection";
import EditPage from "../../../../../components/editButton/editPage";

export default async function editPostsPage({ params }) {
  const brokenParams = await params.id;
  const post = await db.query(`SELECT * FROM posts WHERE ID = $1`, [params.id]);

  const brokenPosts = await post.rows[0];
  const clerkID = await brokenPosts.clerk_id;
  console.log(brokenPosts);
  return (
    <div id="EditPageDiv">
      <p></p>
      <div id="EditPageForm">
        <EditPage params={clerkID} />
      </div>
    </div>
  );
}
