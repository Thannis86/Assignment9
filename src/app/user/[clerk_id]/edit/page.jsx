import { db } from "../../../../../components/dbConnection";
import editSubmit from "../../../../../components/userStuff/editSubmit";
import { currentUser } from "@clerk/nextjs/server";
import { Link } from "@radix-ui/themes";

export default async function EditUserPage({ params }) {
  const brokenParams = await params.clerk_id;
  const userData = await db.query(`SELECT * FROM userstuff WHERE clerk_id=$1`, [
    brokenParams,
  ]);
  const brokenUserData = userData.rows[0];
  const user = await currentUser();
  return (
    <div id="EditUserPage">
      {user?.id === brokenUserData.clerk_id && (
        <form id="userPageForm" action={editSubmit}>
          <input
            type="hidden"
            name="clerk_id"
            value={brokenUserData.clerk_id}
          ></input>
          <label>First Name</label>
          <input
            type="text"
            placeholder={brokenUserData.first_name || "First Name"}
            name="first_name"
            id="first_name"
            required
          ></input>
          <label>Last Name</label>
          <input
            type="text"
            placeholder={brokenUserData.last_name || "Last Name"}
            name="last_name"
            id="last_name"
            required
          ></input>
          <label>About Me</label>
          <input
            type="text"
            placeholder={brokenUserData.about_me || "About Me"}
            name="about_me"
            id="about_me"
            required
          ></input>
          <label>Date of Birth</label>
          <input
            type="text"
            placeholder={brokenUserData.dob || "Date of Birth"}
            name="dob"
            id="dob"
            required
          ></input>
          <label>Email</label>
          <input
            type="text"
            placeholder={brokenUserData.email || "Email"}
            name="email"
            id="email"
            required
          ></input>
          <button type="submit">Save</button>
        </form>
      )}
      <Link id="EditPageBack" href={`/user/${brokenUserData.clerk_id}`}>
        Back
      </Link>
    </div>
  );
}
