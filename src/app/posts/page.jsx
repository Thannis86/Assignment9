import PostForm from "../../../components/newPostForm/postForm";
import ViewPosts from "../../../components/viewPosts/ViewPosts";

export default async function PostsPage() {
  return (
    <div id="PostsPageDiv">
      <PostForm />
      <ViewPosts />
    </div>
  );
}
