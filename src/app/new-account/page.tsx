import { currentUser } from "@clerk/nextjs/server";

export default async function newAccountPage() {
  const user = await currentUser();
  console.log(user);
  const userID = await user.id;
  const userFirstName = await user.firstName;
  const userEmail = await user.emailAddresses[0].emailAddress;

  console.log(userID);
  console.log(userFirstName);
  console.log(userEmail);
  return <p>New Account</p>;
}
