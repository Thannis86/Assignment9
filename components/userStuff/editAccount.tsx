export default async function EditAccountForm({ params }) {
  const wrangledUser = await params;
  // console.log(wrangledUser);
  return (
    <form id="userPageForm">
      <label></label>
      <input
        type="text"
        placeholder={wrangledUser.first_name || "First Name"}
        name="first_name"
        id="first_name"
        required
      ></input>
      <input
        type="text"
        placeholder={wrangledUser.last_name || "Last Name"}
        name="last_name"
        id="last_name"
        required
      ></input>
      <input
        type="text"
        placeholder={wrangledUser.about_me || "About Me"}
        name="about_me"
        id="about_me"
        required
      ></input>
      <input
        type="text"
        placeholder={wrangledUser.dob || "Date of Birth"}
        name="dob"
        id="dob"
        defaultValue={wrangledUser.dob}
        required
      ></input>
      <input
        type="text"
        placeholder={wrangledUser.email || "Email"}
        name="email"
        id="email"
        required
      ></input>
    </form>
  );
}
