import React from 'react'

const Search = (props) => {
    return (
        <nav className="search">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" onChange={props.searchUsers} />
                        <label className="label-icon"><i className="material-icons"><i className="fas fa-search"></i></i></label>

                    </div>
                </form>
            </div>
        </nav >
    )
}

export default Search