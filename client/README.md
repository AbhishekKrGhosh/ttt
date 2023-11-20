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

## `App.js`
```import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Record from './records.json'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Profile cover={Record.cover} profile={Record.profile} name={Record.name} followers={Record.followers} following={Record.following} details={Record.details} link={Record.link} star={Record.star} thumb={Record.thumb} view={Record.view} like={Record.like}/>
      <div className='btnPosts'>{Record.Posts} Posts</div>
      <div className='line'>
      <div className='line1'></div>
      <div className='line2'></div>
      </div>
      <Posts/>

    </div>
  );
}

export default App;
```

## `Navbar.js`
```
import React from "react";
import logo from '../images/logo.png'

function Navbar(props){
    return(
        <div className="navbar">
            <div className="logoParent">
            <img className="logo" src={logo} alt="ttt"/>
            </div>
            <div className="dashParent">
                <div className="dash"></div>
            </div>
            <div className="stories">STORIES</div>
            <div className="coursesParent">
                <button className="courses">Courses</button>
                </div>
            
        </div>
)
}

export default Navbar
```

## `Profile.js`
```
import React from "react";
import cover from '../images/cover.png'
import profile from '../images/profile.png'
import star from '../images/star.png'
import diamond from '../images/diamond.png'
import view from '../images/view.png'
import tick from '../images/tick.png'
import like from '../images/like.png'
import thumb from '../images/thumb.png'


function Profile(props){
    return(
        <div className="profile">
            <div className="coverParent">
                <img className="cover" src={props.cover} alt="coverImage"/>
            </div>
            <div className="pro">
                <div className="pro2">
                <img className="profilepicture" src={props.profile} alt="profilePic"/>
            
                <div className="nameParent">
                <div className="name">
                    {props.name}
                </div>
                <div className="followParent">
                    <div className="followersParent">
                    <div className="followers">{props.followers}</div>Followers</div>
                    <div className="followingParent">
                    <div className="following">{props.following}</div>Following</div>
                </div>
                </div>
                </div>
                <div className="info">
                    <div className="details"><div className="subDetails">{props.details}</div></div>
                    <div className="link"> <a href={props.link}>{props.link}</a></div>
                    <div className="iconDetails">
                    <div className="icon start"><img src={star}/>{props.star}</div>
                    <div className="icon thumpsUp"><img src={thumb}/>{props.thumb}</div>
                    <div className="icon eye"><img src={view}/>{props.view}</div>
                    <div className="icon like"><img src={like}/>{props.like}</div>
                    </div>
                </div>
            
            </div>
            
        </div>
)
}

export default Profile
```

## `Posts.js`
```
import React from "react";
import Post from "./Post";
import Record from '../records.json'

function Posts(){
    
    return(
        <div className="posts">
            {Record.id.map((e)=><Post key={e} title={Record.title[e]} liked={Record.liked[e]} content={Record.content[e]}  tag={Record.tag[e]} creator={Record.creator[e]} date={Record.date[e]} time={Record.time[e]} views={Record.views[e]}/>)}</div>
)
}

export default Posts
```

## `Post.js`
```
import React from "react";
import thumb from '../images/thumb.png'
import thumb2 from '../images/thumb2.png'

function Post(props){

    return(
        <div className="post">
            <div className="subPost icon">
            <div className="postTitle">{props.title}</div>
            <img className="thumbIcon" src={props.liked=="True"?thumb:thumb2} alt="like"/>
            </div>
            
            <div className="postContent">
        {props.content.map((i, id) => {
          if (Array.isArray(i)) {
            return (
              <div key={id}>
                {i.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            );
          } else {
            return <p key={id}>{i}</p>;
          }
        })}
      </div>
            <div className="postFooter">
                <div className="creator"><div className="tag">{props.tag}</div> by {props.creator}</div>
                <div className="time">{props.date} . {props.time} Read . {props.views} Views</div>
            </div>
            <div className="postLine"></div>
        </div>
)
}

export default Post
```

## `records.json`
```
{
    "cover":"https://i0.wp.com/www.benday.com/wp-content/uploads/2015/03/paris-bridge-horizontal.jpg?w=1200&ssl=1",
    "profile":"https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/350534583_581085237557500_3181106281081170662_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0yiXmwO_ySkAX9z1tpn&_nc_ht=scontent.fluh1-2.fna&oh=00_AfBdUrdVLeBM3_hYCKLza-0Ylyrebv9IdbUKwgBYSdwf6w&oe=65602689",
    "name":"Anuj Goslia",
    "followers":"6482",
    "following":"245",
    "details":"Co-founder & CEO at Terribly Tiny Tales",
    "link":"http://www.instagram.com/anujgosalia",
    "star":"125",
    "thumb":"12",
    "view":"57.8K",
    "like":"26.0K",
    "Posts":"134",
    "id":[
        "0",
        "1",
        "2"
    ],
    "title":[
        "A Changing World Order",
        "Indian v/s Australia",
        "Write to Build"
    ],
    "liked":[
        "True",
        "True",
        "True"
    ],
    "content":[
        [
            "The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to send this, including ..."
        ],
        [
            "Think about it - this cricket series was akin to therapy.",
        "",
        "",
         "Laying our childhood trauma up top, working with it slowly and surely over two m..."
        ],
        [
            "Writing is the first step to create:",
        "",
        "",
        "-stories",
        "-products",
        "-companies"
    ]
    ],
    "tag":[
        "musing",
        "thought",
        "thought"
    ],
    "creator":[
        "anujgosalia",
        "anujgosalia",
        "anujgosalia"
    ],
    "date":[
        "August 2",
        "January 21",
        "November 18"
    ],
    "time":[
        "2 mins",
        "1 min",
        "1 min"
    ],
    "views":[
        "102",
        "156",
        "228"
    ]
    
}
```
