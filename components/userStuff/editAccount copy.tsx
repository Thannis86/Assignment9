import { Form } from "radix-ui";

export default async function NewEditAccountForm({ params }) {
  const wrangledUser = await params;
  console.log(wrangledUser);
  return (
    <Form.Root id="userPageForm2">
      <Form.Field name="first_name">
        <Form.Label>First Name</Form.Label>
        <Form.Control asChild>
          <input type="text" />
        </Form.Control>
      </Form.Field>
    </Form.Root>
  );
}
