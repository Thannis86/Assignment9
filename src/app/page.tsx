import { SignUpButton, UserButton } from "@clerk/nextjs";

export default async function homePage() {
  return (
    <>
      <div>This is a fantastic page</div>
      <UserButton />
      <SignUpButton />
    </>
  );
}
