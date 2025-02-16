import { SignUpButton, UserButton } from "@clerk/nextjs";
import PostForm from "../../components/newPostForm/postForm";

export default async function homePage() {
  return (
    <>
      <div>This is a fantastic page</div>
      <UserButton />
      <SignUpButton />
      <PostForm />
    </>
  );
}
