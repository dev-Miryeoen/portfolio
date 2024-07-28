import React from 'react';

const About = () => {
    return (
        <section className="module" id="alt-features">
            <div className="container">
                <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <h2 className="module-title font-alt">About me</h2>
                    <div className="module-subtitle font-ppt6">
                        신뢰는 사회에서 제일 중요한 재산<br/>그 신뢰를 쌓으려면 기대에 부응해야지<br/>기대에 부응하려면 내가 할수있는걸 늘리고 연마해야해
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 col-lg-6 hidden-xs hidden-sm">
                    <div className="alt-services-image align-center"><img src="assets/images/about_img.png" alt="Feature" /></div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="alt-features-item">
                    <div className="alt-features-icon"><span className="icon-profile-male"></span></div>
                    <h3 className="alt-features-title font-alt">Profile</h3>이상원<br/>Lee Sang Won<br/>1991.08.02
                    </div>
                    <div className="alt-features-item">
                    <div className="alt-features-icon"><span className="icon-tools"></span></div>
                    <h3 className="alt-features-title font-alt">Education</h3>
                        2010 태원고등학교 졸업<br/>
                        2014 상지대학교 컴퓨터데이터정보학과 학사 수료<br/>
                        2020 [과정평가형]반응형 앱 &amp; 웹디자인 콘텐츠 제작 수료(800시간)<br/>
                        2024 프론트엔드과정 수료(180시간)
                    </div>
                    <div className="alt-features-item">
                    <div className="alt-features-icon"><span className="icon-ribbon"></span></div>
                    <h3 className="alt-features-title font-alt">Certificate</h3>
                        2019 JLPT N2(일본어)<br />
                        2020 GTQ 1급<br />
                        2020 ITQ A등급<br />
                        2020 웹디자인 기능사<br />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;