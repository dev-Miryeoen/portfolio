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
                    <div className="col-sm-12">
                        <p className="copyright font-alt">&copy; 2024&nbsp;<a href="/">sw portfolio</a></p>
                    </div>
                    </div>
                </div>
                </footer>
            </div>
            <div className="scroll-up"><a href="#totop"><i className="fa fa-angle-double-up"></i></a></div>
        </main>
    );
};

export default Main;