import submitPosts from "./submit";

export default function PostForm() {
  return (
    <form id="PostsForm" action={submitPosts}>
      <input
        type="text"
        name="body"
        id="PostsFormsBody"
        placeholder="Put your crap here"
      ></input>
      <button type="submit">Post</button>
    </form>
  );
}
