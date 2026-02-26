import React from 'react';

const About = () => {
    return (
        <section className="module" id="alt-features">
            <div className="container">
                <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <h2 className="module-title font-alt">About me</h2>
                    <div className="module-subtitle font-ppt6">
                    맡은 일에 대해 끝까지 책임지려는 태도를 중요하게 생각하며, 문제 상황이 발생했을 때는 원인을 파악하고 해결책을 찾는 데 몰입하는 편입니다. 단순히 주어진 일을 처리하는 데 그치지 않고, "어떻게 하면 더 나은 결과를 만들 수 있을까"를 고민하며 업무의 완성도를 높이고자 노력합니다.
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
                        2024 프론트엔드과정 수료(180시간)<br/>
                        2025 웹개발과정 수료<br/>
                        2026 [디지털컨퍼런스]공공데이터 융합 풀스택 개발자 양성과정Ⅰ 수료(832)시간<br/>
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