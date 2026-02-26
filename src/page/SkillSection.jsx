import { faCss3Alt, faFigma, faGitAlt, faGithub, faHtml5, faJava, faJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';

const SkillSection = () => {
    return (
        <section className="module" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              ease: 'easeInOut',
                              duration: 1,
                            }}
                            className="module-title font-alt"
                        >My skills</motion.h2>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ease: 'easeInOut',
                      duration: 1,
                    }}
                    className="row multi-columns-row"
                >
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><FontAwesomeIcon icon={faHtml5} /></div>
                            <h3 className="features-title font-alt">HTML5</h3>
                            <p>페이지의 디자인을 파악하여 화면표현에 필요한 구조로 구축이 가능합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><FontAwesomeIcon icon={faCss3Alt} /></div>
                            <h3 className="features-title font-alt">CSS3</h3>
                            <p>디자인 그대로 코딩 가능합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><FontAwesomeIcon icon={faJs} /></div>
                            <h3 className="features-title font-alt">Javascript</h3>
                            <p>Dom의 동적 제어 및 데이터의 제어가 가능합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><img src="./assets/images/svg/jquery.svg" alt="jquery" /></div>
                            <h3 className="features-title font-alt">Jquery</h3>
                            <p>주로 Dom의 동적제어로 사용하였습니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><img src="./assets/images/svg/photoshop.svg" alt="photoshop" /></div>
                            <h3 className="features-title font-alt">photoshop</h3>
                            <p>이미지의 보정, 가공이 어느정도 가능합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><img src="./assets/images/svg/illustrator.svg" alt="illustrator" /></div>
                            <h3 className="features-title font-alt">illustrator</h3>
                            <p>벡터 이미지의 간단한 작업이 가능합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><FontAwesomeIcon icon={faReact} /></div>
                            <h3 className="features-title font-alt">React</h3>
                            <p>화면구조의 컴포넌트화, 모듈화 및 재사용을 고려하여 작업이 가능합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><img src="./assets/images/svg/express.svg" alt="express" /></div>
                            <h3 className="features-title font-alt">Express</h3>
                            <p>몽고DB와 연동한 간단한 서버구성이 가능합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><FontAwesomeIcon icon={faFigma} /></div>
                            <h3 className="features-title font-alt">Figma</h3>
                            <p>포토샵 기술 덕분에 다루는데 익숙합니다.<br />유용한 플러그인은 조금 아는정도입니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><FontAwesomeIcon icon={faGitAlt} /></div>
                            <h3 className="features-title font-alt">git</h3>
                            <p>브랜치를 이용한 프로젝트의 버전관리가 가능합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><FontAwesomeIcon icon={faGithub} /></div>
                            <h3 className="features-title font-alt">git hub</h3>
                            <p>레포지토리를 이용한 프로젝트의 공유 및 저장이 가능합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><FontAwesomeIcon icon={faDatabase} /></div>
                            <h3 className="features-title font-alt">DBMS</h3>
                            <p>SQL문 활용이 가능합니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><FontAwesomeIcon icon={faVuejs} /></div>
                            <h3 className="features-title font-alt">Vue.js</h3>
                            <p>Vue.js를 사용해본 경험이 있습니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><FontAwesomeIcon icon={faJava} /></div>
                            <h3 className="features-title font-alt">Java</h3>
                            <p>Java만을 이용한 게임을 만들어본 경험이 있습니다.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="features-item">
                            <div className="features-icon"><FontAwesomeIcon icon={faLeaf} /></div>
                            <h3 className="features-title font-alt">Spring boot</h3>
                            <p>프로젝트를 진행해본 경험이 있습니다.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillSection;