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