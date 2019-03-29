import React from 'react'

const FetchPeople = (props) => {

    return (
        <ul className="collection container">
            {props.data.map((obj) => (
                <li key={obj.id.value} className="collection-item avatar">
                    <img src={obj.picture.large} alt="" className="circle"></img>
                    <span className="title"><b>{obj.name.first.charAt(0).toUpperCase()}{obj.name.first.slice(1)} {obj.name.last.charAt(0).toUpperCase()}{obj.name.last.slice(1)}</b></span>
                    <p><i className="fas fa-envelope">&nbsp; </i>{obj.email}</p>
                    <p><i className="fas fa-birthday-cake">&nbsp; </i>{obj.dob.date.slice(0, 10)}</p>
                </li>
            )
            )}
        </ul>
    )
}

export default FetchPeople