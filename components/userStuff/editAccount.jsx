import editSubmit from "./editSubmit";

export default async function EditAccountForm({ params }) {
  const wrangledUser = await params;
  console.log(wrangledUser);
  return (
    <form id="userPageForm" action={editSubmit}>
      <input
        type="hidden"
        name="clerk_id"
        value={wrangledUser.clerk_id}
      ></input>
      <label>First Name</label>
      <input
        type="text"
        placeholder={wrangledUser.first_name || "First Name"}
        name="first_name"
        id="first_name"
        required
      ></input>
      <label>Last Name</label>
      <input
        type="text"
        placeholder={wrangledUser.last_name || "Last Name"}
        name="last_name"
        id="last_name"
        required
      ></input>
      <label>About Me</label>
      <input
        type="text"
        placeholder={wrangledUser.about_me || "About Me"}
        name="about_me"
        id="about_me"
        required
      ></input>
      <label>Date of Birth</label>
      <input
        type="text"
        placeholder={wrangledUser.dob || "Date of Birth"}
        name="dob"
        id="dob"
        required
      ></input>
      <label>Email</label>
      <input
        type="text"
        placeholder={wrangledUser.email || "Email"}
        name="email"
        id="email"
        required
      ></input>
      <button type="submit">Save</button>
    </form>
  );
}
