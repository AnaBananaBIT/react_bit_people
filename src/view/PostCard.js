import React from 'react'

const PostCard = (props) => {
    return (  
          <div className="card">
             {props.users.map(user=>( 
      <div className="row">
          <div className="col 12">
          <div className="card col 4 offset-s6">
            <div className="card-image">
              <img src={user.pictureLarge}/>
              <span className="card-title">{user.name}</span>
            </div>
            <div className="card-content">
              <p>{user.email}</p>
              <p>Birthday:{user.dob}</p>
            </div>
          </div>
          </div>
          </div>
        ))}
     </div>
    )
}


export default PostCard