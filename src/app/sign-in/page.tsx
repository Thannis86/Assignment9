import { SignIn } from "@clerk/nextjs";
import { Header } from "@radix-ui/themes/components/table";

export default function signInPage() {
  return (
    <div id="signMainDiv">
      <Header id="signHead">Sign in Page</Header>
      <div id="signBox">
        <SignIn />
      </div>
    </div>
  );
}
