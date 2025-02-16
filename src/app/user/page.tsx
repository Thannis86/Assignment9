import { db } from "../../../components/dbConnection";

export default async function userPage() {
  const data = await db.query(`SELECT * FROM userstuff`);
  const wrangledData = data.rows;
  console.log(wrangledData);
  return <div id="userPageDiv">Please click here to go to your profile</div>;
}
