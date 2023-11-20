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