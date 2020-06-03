# Exercise - Dynamic Routes

- Clone this repo
- Create a fresh React app using CRA
- Create a views folder in src/ folder
  - create two page components in there: PostList.js and PostDetail.js

## PostList page

  - Setup your state with an empty posts array
  - Display a list of posts
    - use the typicode posts API: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
    - load the data in componentDidMount and store it in state

  - Render all posts with just the title (not description)
    - add a router link to get to a single post
    - the link should point to the PostDetail page component
    - attach the ID of the post to your link

## PostDetail page

  - Receive the post ID from params
  - Fetch the single post from API here in componentDidMount
    - do so by appending the post ID to the URL
    - store the received single post in state
  - Render method: show here all post details including the description field
  - Add a router link to get back to the Post list

That's it! 

Congrats! Routing from list to detail view mastered


## Bonus (optional - just for extra challenge)

- Research on Google how you can pass data (=state) when clicking on a router link component `<Link to="some-path">`. And how you can receive it in the target page

- Refactor your project
  - Commit your current work
  - Adapt PostList.js
    - send along the post item when clicking on the detail view link
  - Adapt PostDetail.js
    - refactor your class component to a functional component
    - delete or comment out your componentDidMount method with the API call
    - look for the received post object in props
      - console.log the received props and search for it there
    - display the received post object in your render() method

Well done
