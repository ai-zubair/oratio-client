import React from 'react'
import './Footer.css'

function Footer() {

    return (
        <footer className="footerWrapper">
            <div className="footerContainer">
                <div className="disclaimer">
                    You need to allow access to video and audio to place calls.<br/>
                    Oratio is an Open Source initiative and does not store/share any data on.
                </div>
                <div className="self">
                    Made with <span role='img' aria-label='heart-emoji'>❤️</span> <br/>@ National Institute of Technology, Srinagar.
                </div>
            </div>
        </footer>
    )

}

export default Footer