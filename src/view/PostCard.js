import React from 'react'

const PostCard = (props) => {
    return (

        props.users.map(user => (
            < div className="row" >
                <div className="card col4 m4">
                    <div className="card-image">
                        <img src={user.pictureLarge} alt="" />
                        <span className="card-title">{user.name}</span>
                    </div>
                    <div className="card-content">
                        <p>{user.email}</p>
                        <p>Birthday date:{user.dob}</p>
                    </div>
                </div>
            </div >
        ))

    )
}


export default PostCard