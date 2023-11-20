# TERRIBLY TINY TALES ASSIGNMENT

LIVE LINK [Profile Screen](https://655bb627d274461ba83deda9--iridescent-sorbet-16ee97.netlify.app/).

## How to use

fork and download the repo
open in vscode or any other editor of your choice

### run command
### `npm i`
then
### `npm start`

now you can see the app at [http://localhost:3000](http://localhost:3000)
the port address might differ.

## Code Components
The code is divided into mainly 3 components
`Navbar.js`
`Profile.js`
`Posts.js`
all these three components are inside `App.js`
again in `Posts.js` we have a `Post.js` for rendering every posts according to the data that  is stored in `records.json` file.

## Working
Here I have created a `records.json` file which stores all the data about the web app. From there we are fetching the data and we are passing those data with the help of props from the parent to the child components.