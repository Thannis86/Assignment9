"use server";

import { db } from "../dbConnection";

export default async function DeletePosts(formvalues) {
  const id = formvalues.get("id");
  console.log(id);
  db.query(`DELETE FROM posts WHERE id = $1`, [id]);
}
