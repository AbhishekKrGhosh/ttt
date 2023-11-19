import React from "react";
import thumb from '../images/thumb.png'

function Post(){
    return(
        <div className="post">
            <div className="subPost icon">
            <div className="postTitle">A Changing World</div>
            <img className="thumbIcon" src={thumb} alt="like"/>
            </div>
            
            <div className="postContent">
                The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to send this, including ...
            </div>
            <div className="postFooter">
                <div className="creator"><div className="tag">musing</div> by anujgosalia</div>
                <div className="time">August 2 . 2 mins Read . 102 Views</div>
            </div>
            <div className="postLine"></div>
        </div>
)
}

export default Post
