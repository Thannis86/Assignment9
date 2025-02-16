import { db } from "../../../components/dbConnection";

export default async function userPage() {
  await db.query(`SELECT * FROM userstuff`);
  return <div id="userPageDiv">Please click here to go to your profile</div>;
}
