import React from 'react'

const SearchBar = (props) => {
    return (
        <nav className="search">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required onChange={props.onSearch} />
                        <label className="label-icon"><i className="material-icons"><i className="fas fa-search"></i></i></label>

                    </div>
                </form>
            </div>
        </nav >
    )
}

export default SearchBar