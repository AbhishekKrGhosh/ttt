import React from "react";
import cover from '../images/cover.png'
import profile from '../images/profile.png'
import star from '../images/star.png'
import diamond from '../images/diamond.png'
import view from '../images/view.png'
import tick from '../images/tick.png'
import like from '../images/like.png'
import thumb from '../images/thumb.png'

function Profile(){
    return(
        <div className="profile">
            <div className="coverParent">
                <img className="cover" src={cover} alt="coverImage"/>
            </div>
            <div className="pro">
                <div className="pro2">
                <img className="profilepicture" src={profile} alt="profilePic"/>
            
                <div className="nameParent">
                <div className="name">
                    Anuj Gosalia
                </div>
                <div className="followParent">
                    <div className="followersParent">
                    <div className="followers">6482</div>Followers</div>
                    <div className="followingParent">
                    <div className="following">245</div>Following</div>
                </div>
                </div>
                </div>
                <div className="info">
                    <div className="details"><div className="subDetails">Co-founder and CEO at Terribly Tiny Tales</div></div>
                    <div className="link"> <a href="http://www.instagram.com/anujgosalia">http://www.instagram.com/anujgosalia</a></div>
                    <div className="iconDetails">
                    <div className="icon start"><img src={star}/>125</div>
                    <div className="icon thumpsUp"><img src={thumb}/>12</div>
                    <div className="icon eye"><img src={view}/>57.8K</div>
                    <div className="icon like"><img src={like}/>26.0K</div>
                    </div>
                </div>
            
            </div>
            
        </div>
)
}

export default Profile