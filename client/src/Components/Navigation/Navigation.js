import React from 'react'
import '../Navigation/Navigation.css'

const Navigation = () => {
    return (
        <header className="dropShadow">
            <div className="headerWrapper">
                <div className="headerContainer flex">
                    <div className="headerLogoLinkWrapper">
                        <div className="headerLogoLink">
                        <a href='/'>
                            <div className="headerLogo flex flex-row">
                                <div className="logoText">
                                    Oratio
                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navigation