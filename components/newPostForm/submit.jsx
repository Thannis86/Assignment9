"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "../dbConnection";

export default async function submitPosts(formvalues) {
  const user = await currentUser();
  const userID = await user.id;
  const userFirstname = await user.firstName;
  console.log("Form Values are", formvalues.get("body"));
  db.query(
    `INSERT INTO posts (clerk_id, poster_name, body, likes)
    VALUES($1, $2, $3, $4)`,
    [userID, userFirstname, formvalues.get("body"), 0]
  );
}
