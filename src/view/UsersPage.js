import React from 'react'

const UsersPage = (props) => (

    <ul className="collection container">

        {props.users.map(user => (
            <li key={user.cell} className="collection-item avatar">
                <img src={user.picture} alt="" className="circle"></img>
                <span className="title"><b>{user.name} {user.surname}</b></span>
                <p><i className="fas fa-envelope">&nbsp; </i>{user.email}</p>
                <p><i className="fas fa-birthday-cake">&nbsp; </i>{user.dob}</p>
            </li>

        ))}

    </ul>
)


export default UsersPage