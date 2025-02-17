import { SignedIn, SignedOut } from "@clerk/nextjs";
import PostForm from "../../components/newPostForm/postForm";
import ViewPosts from "../../components/viewPosts/ViewPosts";
import { currentUser } from "@clerk/nextjs/server";

export default async function homePage() {
  const user = await currentUser();
  const clerk_id = user.id;
  return (
    <>
      <ViewPosts params={clerk_id} />
      <SignedOut>
        <h1 id="SignUpPlease">Please Sign In/Up To Make Posts</h1>
      </SignedOut>
      <SignedIn>
        <PostForm />
      </SignedIn>
    </>
  );
}
