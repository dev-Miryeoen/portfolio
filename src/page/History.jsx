import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import {motion} from 'framer-motion';

const History = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef(null); // useRef로 참조할 요소
    const triggerRef = useRef(null); // useRef로 참조할 요소
    // horizontal 스크롤 애니메이션
    useEffect(() => {
        const pin = gsap.fromTo( // from, to, fromTo가 있다.
        triggerRef.current, // Gsap 애니메이션이 시작되는 요소 위치
        { translateX: 0 }, // from 부분(초기 시작)
        {
            translateX: -((triggerRef.current.clientWidth) - sectionRef.current.clientWidth), // to 부분
            ease: "none", // 쓸데없는 애니메이션 없애는 부분
            scrollTrigger: { // 스크롤 애니메이션 발생하는 부분
                trigger: triggerRef.current, // 스크롤이 발생되는 요소 위치
                start: "top", // "요소위치 시작위치"
                end: "bottom", // "요소위치 끝위치"
                scrub: 0.7, // 되감기 기능, 또한 스크롤을 부드러운 애니메이션 추가.
                pin: ".project-section", // 가로스크롤시 페이지를 고정할 수 있는 기능
            },
        }
        );
        return () => {
            pin.kill(); // 모든 애니메이션 중단
        };
    }, []);

    return (
        <section className='project-section' id='history' ref={sectionRef}>
            <div className="contentContainer">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      ease: 'easeInOut',
                      duration: 1,
                      delay: 0.3,
                    }}
                    className="module panel row" 
                    ref={triggerRef}
                >
                    <div className="col-sm-6 col-sm-offset-3 history-title">
                        <h2 className='module-title font-alt'>Skill History</h2>
                    </div>
                    <div className="history-line"></div>
                    <div className="hBox">
                        <h3>2019.11</h3>
                        <p>[과정평가형]<br/>반응형 앱 & 웹디자인 콘텐츠 제작 수강<br/>(800시간)</p>
                    </div>
                    <div className="hBox">
                        <h3>2020.01</h3>
                        <p>GTQ 1급 &amp; ITQ A등급<br />자격증 취득</p>
                    </div>
                    <div className="hBox">
                        <h3>2020.04</h3>
                        <p>[과정평가형]<br/>반응형 앱 & 웹디자인 콘텐츠 제작 수료<br/>(800시간)</p>
                    </div>
                    <div className="hBox">
                        <h3>2020.04</h3>
                        <p>웹디자인 기능사<br />자격증 취득</p>
                    </div>
                    <div className="hBox">
                        <h3>2020.04</h3>
                        <p>웹 퍼블리셔로<br/>드림위더스 입사</p>
                    </div>
                    <div className="hBox">
                        <h3>2021.03</h3>
                        <p>드림위더스 퇴사 및 퓨쳐에셋파이낸셜 입사</p>
                    </div>
                    <div className="hBox">
                        <h3>2023.12</h3>
                        <p>퓨쳐에셋파이낸셜 퇴사</p>
                    </div>
                    <div className="hBox">
                        <h3>2024.01</h3>
                        <p>프론트엔드 사설학원 강의 수강</p>
                    </div>
                    <div className="hBox">
                        <h3>2024.05</h3>
                        <p>팀프로젝트 eggbnb 제작 시작</p>
                    </div>
                    <div className="hBox">
                        <h3>2024.07</h3>
                        <p>프론트엔드 사설학원 강의 수료</p>
                    </div>
                    <div className="hBox">
                        <h3>2024.07</h3>
                        <p>팀프로젝트 eggbnb 완료</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default History;