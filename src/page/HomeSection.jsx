import React from 'react';
import {motion} from 'framer-motion';

const HomeSection = () => {
    return (
        <section className="home-section home-full-height bg-dark bg-gradient" id="home" data-background="assets/images/section-15.jpg">
            <div className="titan-caption">
                <div className="caption-content">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          ease: 'easeInOut',
                          duration: 1,
                          delay: 1.5,
                        }}
                         className="font-alt mb-30 titan-title-size-1">
                        Web Design &amp; Frontend
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          ease: 'easeInOut',
                          duration: 2,
                          delay: 0.5,
                        }}
                        className={"font-ppt6 mb-40 titan-title-size-4"}
                    >
                        포트폴리오
                    </motion.div>
                    <a className="section-scroll btn btn-border-w btn-round" href="#services">Start View</a>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;