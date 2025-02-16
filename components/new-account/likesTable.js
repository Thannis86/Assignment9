"use server";
import { db } from "../dbConnection";

import { currentUser } from "@clerk/nextjs/server";

export default async function likesTable() {
  const user = await currentUser();
  const userID = await user.id;
  const userFirstname = await user.username;
  const userEmail = await user.emailAddresses[0].emailAddress;
  console.log(user);
  await db.query(
    `CREATE TABLE IF NOT EXISTS likes_${userID} (
        post_id INT,
        comment_id INT)`
  );
  await db.query(
    `INSERT INTO userStuff (clerk_id, first_name, email)
  VALUES($1, $2, $3)`,
    [userID, userFirstname, userEmail]
  );
}
