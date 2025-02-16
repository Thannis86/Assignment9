import { currentUser } from "@clerk/nextjs/server";
import { Button, Link } from "@radix-ui/themes";
import likesTable from "../../../components/new-account/likesTable";

export default async function newAccountPage() {
  const user = await currentUser();
  console.log(user);

  return (
    <div id="newAccountMain">
      <Button id="newAccountButton" onClick={likesTable}>
        Please click here to complete sign up
      </Button>
      <Link id="newAccountSecondButton">
        Click here to fill in your new profile!
      </Link>
    </div>
  );
}
