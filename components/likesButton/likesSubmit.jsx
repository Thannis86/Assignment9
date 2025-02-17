"use server";

import { db } from "../dbConnection";

export default async function LikeButton(formvalues) {
  const id = formvalues.get("id");
  const clerk_id = formvalues.get("clerk_id");

  console.log(`ID ${id}`);
  console.log(`Clerk ${clerk_id}`);
  db.query(`UPDATE posts SET likes = likes+1 WHERE id=$1`, [id]);
  db.query(
    `INSERT INTO likes_${clerk_id} (post_id)
    VALUES($1)
    `,
    [id]
  );
}
