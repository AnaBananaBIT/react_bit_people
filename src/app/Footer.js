import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container center-align">
                    © {new Date().getFullYear()} Copyright Belgrade Institute of Technology
                </div>
            </div>
        </footer>
    )
}

export default Footer