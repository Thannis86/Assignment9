"use server";

import { db } from "../dbConnection";

export default async function editPosts(formvalues) {
  const id = formvalues.get("id");
  const body = formvalues.get("body");
  console.log(body);
  db.query(
    `UPDATE posts SET body = $1
      WHERE id = $2`,
    [body, id]
  );
}
