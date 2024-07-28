import React from 'react';
import PageLoader from './PageLoader';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import SkillSection from './SkillSection';
import Work from './Work';
import History from './History';
import About from './About';

const Main = () => {
    return (
        <main>
            <PageLoader />
            <Navbar />
            <HomeSection />
            <div className="main">
                <About />
                <hr className="divider-d"/>
                <SkillSection />
                <History />
                <Work />
                <footer className="footer bg-dark">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6">
                        <p className="copyright font-alt">&copy; 2017&nbsp;<a href="index.html">TitaN</a>, All Rights Reserved</p>
                    </div>
                    <div className="col-sm-6">
                        <div className="footer-social-links"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-dribbble"></i></a><a href="#"><i className="fa fa-skype"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
            </div>
            <div className="scroll-up"><a href="#totop"><i className="fa fa-angle-double-up"></i></a></div>
            <script async="" defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDK2Axt8xiFYMBMDwwG1XzBQvEbYpzCvFU"></script>
        </main>
    );
};

export default Main;