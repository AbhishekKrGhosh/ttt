# TERRIBLY TINY TALES ASSIGNMENT

LIVE LINK:  [Profile Screen](https://655bb627d274461ba83deda9--iridescent-sorbet-16ee97.netlify.app/).

## Pictures:
![Screenshot 2023-11-21 015144](https://github.com/AbhishekKrGhosh/ttt/assets/92973940/fdf0f8f9-a584-42d8-93ae-d2060e9b24eb)
![Screenshot 2023-11-21 015936](https://github.com/AbhishekKrGhosh/ttt/assets/92973940/b1473154-9eb6-453b-9e0b-3c69518459bb)
![Screenshot 2023-11-21 015951](https://github.com/AbhishekKrGhosh/ttt/assets/92973940/14386c46-2ddb-43d1-af54-b296f61313a7)

## Responsiveness:

![WhatsApp Image 2023-11-21 at 02 01 35](https://github.com/AbhishekKrGhosh/ttt/assets/92973940/e819d254-35be-4579-8606-07a3293168e1)


## How to use

fork and download the repository

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
