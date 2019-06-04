import React from 'react'

const PostCard = (props) => {
    return (      
          props.users.map(user => (
            < div className={`row ${user.gender}`} >
                <div class="col 4">
                    <div class="card teal lighten-2">
                        <div class="card-content white-text">
                             <span class="card-title">{user.name}</span>
                                <img src={user.pictureLarge}/>
                       </div>
                         <div class="card-action">
                             <p>{user.email}</p>
                            <p>Birthday date:{user.dob}</p>
                         </div>
                        </div>
                    </div>
            </div >
        ))

    )
}


export default PostCard