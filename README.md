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

---

15/02 11pm

So my previous push didn't get properly pushed for some reason and I'm not sure why, so here you get both of them.

In this update I've tried a few things further to play around with. As mentioned, I didn't like how the sign up process worked so I've started on my own. The issue that I was having was rediricting the sign in URL from the sign in page wasn't working and it was sending it to a random uncreated page on my website and not actually generating the account. The way I found to counter this was to have the only sign up option be through google, so I hope everyone that wants to see this has a google account.

I have set it so that creating an account through google will redirect you to a page where when you click the button, it will generate a row on the user table and create a new likes table which will be later integrated into the likes feature.

My current biggest issue is having things being retrievered through 'const user = await currentUser();' as the page crashes if a user isn't signed up, but this was my plan for people to be able to edit their own profiles without interacting with others. So that's something to look at tomorrow. At this point I am confident in hitting all base goals in time, but not the stretch goals.

---

16/02 5pm

Today I decided to start with the user page as an easier start. I've setup a regular form and started working on a nicer form with Radix but decided that sticking with simpler stuff with my time limit was probably for the best.

I've also added a button to the nav bar to take you to your own profile page which was a huge headache to get the current user ID on the client side. I tried creating a server side component that would export just the user ID but because of the async/await section, it wouldn't properly send the user ID. Eventually I used 'useUser' to be able to properly get it client side.

With the form for editing the profile mostly setup (Just need to do the submit button and the function for that), I decided to work on the posts section, then ran into issues with the mapping component, partly due to typescript and it wanting a type for the posts element which i don't know how to add, so i switched to the posts page instead which will likely just be added to the home page with the posts page working as a way to route to individual posts.

---

16/02 7pm

In this post I have completed my posts page and the form to submit a new post. At this point I think I'm definitely handling the clerk stuff in an awkward way, but I'm happy enough with how it's going right now. I did have some issues with the syntaxes and phrasing of different parts, but it was just a bit of trial and error until things fit. I also added the post form to the home page and in the future will add it to the user page

---

16/02 9pm

I have now completed posts on user pages to display posts posted by that user, along with finishing off the forms. For some reason this form was substantially more awkward than previous ones and wouldn't allow me to ender anything that wasn't pure string, so I ended up having to wrap all the values in `${}`.

I have also wrapped some of the user specific features inside the signedin and signedout components and tidied up the page.

Lastly I have included the posts function in a separate file and added it to the home page.

---

16/02 9:30pm

In this final push I have created my error page, completing all of my requirements. My biggest mistake on this project was assuming I'd finish it quicker than I did so that I could hit the stretch goals after spending the first day and a half playing around with radix and other bits. I didn't get to finish everything I wanted to, but unfortunately that was down to my own poor planning. I also didn't get my database properly setup as I spent a long time messing around with it due to DrawSQL giving me incorrect code. On multiple occasions I had to delete and recreate some of the tables. This means that none of the tables are actually joined. Some of this is due to my lack of understanding of joining tables, but a decent portion is due to me spending 4 hours trying to figure out why things weren't working as they should because I stupidly trusted the code given from a random website without properly checking it.

I am however happy that I completed 1 of the stretch goals and all the basic requirements. In the time I have remaining I may try to add another stretch goal to the finish line.

In this update I have also adjusted some errors that have caused vercel to not properly deploy.

---

I've still been working and may push this if given permission.

To start with I've created a delete button for posts that only appear for posts that are linked to the currently logged in user. This was fairly straightforward and easy after some messing between currentUser and useUser from Clerk. It did take me an extra moment to add it to the user page too as they are separate functions from the posts and home pages, but it wasn't too difficult.

I completed the edit post function. This was a mix of the edit profile and delete post functions.

I have now finished 4/7 of the stretch goals and I'm happy with this for now.

If given the opportunity, I would update the edit profile page to only appear based on current user as it currently appears for everyone (Similarly to how I've have the delete and edit function appear based on the user). I would also add a comment function and the stretch goal of the like posts.

---

17/02 10pm

This will be my last push after confirming with Joe that I will be able to do so. This includes the previous section that's not timestamped.

I have reconfigured my user page to display the user's profile information and have created a conditionally rendered edit button to take the user to a separate edit page. I have also had the form for this conditionally render for the current user so no one can 'hack' another profile.

I have now created a like function that also logs the post liked on a separate table, created for each user. I have also included in the SQL that you cannot have the same post in your likes table multiple times, however, adding it so that you cannot like a post more than once to increase the likes counter would require completely recreating the posts function to handle this.

I have inserted into the user's page a table that shows posts that the user has liked. Unfortunately due to conflicts, I did have to alter the SQL that stopped repeat posts from being added to the user's likes table. However, because of how the query pulls the posts from the table using the user's likes table as a reference, it will only pull the same result once anyway. There is however no way to unlike a post.

With this I have hit the likes goal.

I am tempted to add a comments feature too, but I am also aware that I don't want to oversaturate what is an assignment needing to be marked, especially with things outside the actual spec. With that in mind however, I do believe that while I haven't hit all of the stretch goals, I have shown my understanding well enough to have hit them if I had gone for them and this is a point I'm happy to argue (Fight me Joe)

The only thing I wish I'd done is a custom sign out button. Currently I have left a clerk drop down for this instead of figuring out the correct rerouting to add it to my own drop down, but I am confident that given I have created the routes for sign in and sign up, this would be within my capabilities.

I am also aware of an issue with the routing where if you sign up through google through the sign in page, it will send you to the wrong address.

---

Requirements

Completed requirements
🎯 Set up user sign-up and user login using Clerk.
🎯 Use 1 or more Radix UI Primitive component, or something similar (e.g. use of a different component library to enhance UX, not just Tailwind).
🎯 Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.
🎯 Create and display an error/not found page if the user visits a page that doesn’t exist.
🎯 Enable users to create a user profile, and input profile information (such as a user biography) using a form. Users and user information should be stored in their own table in the database and handled with an appropriate route (e.g. /user/[userId]).

Stretch Goals

🏹 Let users follow each other by establishing a follower and followee relationship between profiles.
🏹 Ensure that a user’s biography cannot be left blank. If a user logs in without one, prompt them to add this information.

Completed Stretch Goals
🏹 Allow users to view other profiles directly from posts they see on the global timeline, using a dynamic users route.
🏹 Allow users to delete their content.
🏹 Create and display an error/not found page if the user visits another users profile that doesn’t exist.
🏹 Allow users to update their content. You can achieve this either with a dynamic route (“/posts/[id]/edit”) or by creating a modal.
🏹 Enable users to like posts by linking their user_id to the liked_post in a junction table.
