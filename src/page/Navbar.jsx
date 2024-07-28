import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-custom navbar-transparent navbar-fixed-top one-page" role="navigation">
            <div className="container">
            <div className="navbar-header">
                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><a className="navbar-brand" href="/">SW Portfolio</a>
            </div>
            <div className="collapse navbar-collapse" id="custom-collapse">
                <ul className="nav navbar-nav navbar-right">
                <li><a href="#totop">Home</a></li>
                <li><a className="section-scroll" href="#alt-features">About</a></li>
                <li><a className="section-scroll" href="#services">Skill</a></li>
                <li><a className="section-scroll" href="#history">History</a></li>
                <li><a className="section-scroll" href="#works">Works</a></li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;