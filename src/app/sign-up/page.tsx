import { SignUp } from "@clerk/nextjs";
import { Header } from "@radix-ui/themes/components/table";

export default function signUpPage() {
  return (
    <div id="signMainDiv">
      <Header id="signHead">Sign Up Page</Header>
      <div id="signBox">
        <SignUp />
      </div>
    </div>
  );
}
