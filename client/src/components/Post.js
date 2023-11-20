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
