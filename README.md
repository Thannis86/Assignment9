13/02 - 3pm

Initial upload.

Most of this project will be basically copied from my previous assignment with some fun extras added on

--

13/02 8pm

In this push, I've started working on a little UI. I've setup a nav bar and started exploring style choices. I'm currently planning to have a user icon as a drop down button. I'm using radix and trying to figure out how to use the <Avatar> to trigger the drop down. Using the below discussion, I do have an idea on how to do this. However, the 'use child' is being really awkward and it seems no matter where I place it, it's not happy

https://github.com/radix-ui/primitives/discussions/2300

I've also setup my DB connection.

---

14/02

Slight disaster. My readme notes weren't saved when I had a computer crash and I don't remember what I wrote, but fortunately everything else was saved.

However, yesterday I figured out how to properly use radix.

When it comes to having the <Avatar> act as the button, I realised that radix elements are annoying awkward. So to countere this, I wrapped <Avatar> in <div role="button"> and even though the elements are awkward, all it needs is any form of button on the drop down trigger section for it to work. I also updated the styles choice and added another temporary <Avatar> to have a temporary fill in logo (That will likely end up as a permanent one if I don't have time to create one). I likewise did this by wrapping it with <Link>.

For the rest of the day I worked on experimenting with clerk. I have introduced a sign in and sign up page to the website, while not looking 100% amazing, still look pretty decent in my opinion.

---

15/02 5pm

Today I continued working with clerk. I don't like how the skeleton was suggesting setting up the account with supabase as it seems a little manual and in an actual deployment, something people would miss.

After a significant amount of research, watching 2 year old videos because they're the only ones that can link the two together and a lot of general experimenting, I figured out how best to work on this approach.

Importing currentUser from @clerk/nextjs/server enables me to create an object with all the details the server/client is receiving from clerk in order for the account to actually function. From here I can separate the individual parts of the object into things such as email, firstName and actual userID. I can then shove this onto the redirected new account page and have this information automatically sent to the database to setup new tables. I can also use this as a verifcation for being able to edit your own profile.
