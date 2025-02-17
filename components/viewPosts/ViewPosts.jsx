import { db } from "../dbConnection";
import Link from "next/link";
import { Button, Text } from "@radix-ui/themes";
import { currentUser } from "@clerk/nextjs/server";
import DeleteButton from "../deleteButtons/deletebutton";
import EditButton from "../editButton/editbutton";
import LikeButton from "../likesButton/likesSubmit";
import { SignedIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { use } from "react";
import LikesButton from "../likesButton/LikesButton";

export default async function ViewPosts() {
  const { user } = await useUser;
  console.log(user);
  // const user = await currentUser();
  // const clerk_id = await user.id;
  const posts = await db.query(`SELECT * FROM posts`);
  const wrangledPosts = posts.rows;
  console.log(wrangledPosts);
  return (
    <div id="PostsDiv">
      {wrangledPosts.map((posts) => (
        <div key={posts.id} className="PostsPagePosts">
          <div className="PostsBackgroundDiv"></div>
          <Link href={`/user/${posts.clerk_id}`} className="PostsName">
            {posts.poster_name}
          </Link>
          <Text className="PostsBody">{posts.body}</Text>
          <Text className="Posts">Likes: {posts.likes}</Text>
          <SignedIn>
            <DeleteButton params={posts} />
            <EditButton params={posts} />
            <LikesButton params={posts} />
          </SignedIn>
        </div>
      ))}
    </div>
  );
}
