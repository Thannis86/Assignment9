"use server";

import { redirect } from "next/navigation";
import { db } from "../dbConnection";

export default async function editSubmit(formvalues, event) {
  // event.preventdefault;
  const clerkID = await formvalues.get("clerk_id");
  const stringId = await JSON.stringify(clerkID);
  console.log(`Test ${clerkID}`);
  const firstName = await formvalues.get("first_name");
  const lastName = await formvalues.get("last_name");
  const aboutMe = await formvalues.get("about_me");
  const dob = await formvalues.get("dob");
  const email = await formvalues.get("email");
  console.log(`DOB = ${dob}`);
  db.query(
    `UPDATE userstuff SET first_name = $1, last_name = $2, email = $3, dob = $4, about_me = $5
    WHERE clerk_id = $6`,
    [
      `${firstName}`,
      `${lastName}`,
      `${email}`,
      `${dob}`,
      `${aboutMe}`,
      `${clerkID}`,
    ]
  );
  redirect(`/user/${clerkID}`);
}
