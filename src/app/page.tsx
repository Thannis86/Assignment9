import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import PostForm from "../../components/newPostForm/postForm";
import ViewPosts from "../../components/viewPosts/ViewPosts";

export default async function homePage() {
  return (
    <>
      <UserButton />
      <ViewPosts />
      <SignedOut>
        <h1 id="SignUpPlease">Please Sign In/Up To Make Posts</h1>
      </SignedOut>
      <SignedIn>
        <PostForm />
      </SignedIn>
    </>
  );
}
