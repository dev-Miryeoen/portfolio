import React from 'react';

const Work = () => {
    const preDefault = (e) => {
        e.preventDefault();
    }
    return (
        <section className="module pb-0" id="works">
            <div className="container">
                <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <h2 className="module-title font-alt">My Works</h2>
                    <div className="module-subtitle font-serif"></div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <ul className="filter font-alt" id="filters">
                    <li><a className="wow fadeInUp current" href="#" data-filter="*">All</a></li>
                    <li><a className="wow fadeInUp" href="#" data-filter=".webdesign" data-wow-delay="0.2s">Web Design</a></li>
                    <li><a className="wow fadeInUp" href="#" data-filter=".publish" data-wow-delay="0.4s">Publish</a></li>
                    <li><a className="wow fadeInUp" href="#" data-filter=".frontend" data-wow-delay="0.6s">Frontend</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <ul className="works-grid works-grid-gut works-grid-3 works-hover-w" id="works-grid">
                <li className="work-item doNotShow webdesign publish"><a href="#" onClick={preDefault}>
                    <div className="work-image"><img src="assets/images/work-7.jpg" alt="Portfolio Item"/></div>
                    <div className="work-caption font-alt">
                    <h3 className="work-title">LeoDigm(mobile)</h3>
                    <div className="work-descr">모든 html 페이지</div>
                    <div className="work-do">디자인 및 퍼블리싱</div>
                    <div className="work-tech">HTML, CSS, javascript, jquery</div>
                    <div className="work-comment">급하게 만들어야할 상황이어서 휴일포함 3일동안 밤낮으로 작업했었던게 생각나네요. 하드코딩 10페이지 분량으로 디자인부터 시작해서 기능동작까지 구현하였습니다. 뉴모피즘 테마로 디자인하였으며 하단의 서클메뉴를 구현하는데 구글링으로 방법을 찾아보고 적용시켰습니다.<br/>개인 프로젝트가 아니므로 목업으로 사진으로만 올리는점 양해 바랍니다.</div>
                    </div></a></li>
                <li className="work-item doNotShow webdesign publish"><a href="#" onClick={preDefault}>
                    <div className="work-image"><img src="assets/images/work-8.jpg" alt="Portfolio Item"/></div>
                    <div className="work-caption font-alt">
                    <h3 className="work-title">Future Asset Financial</h3>
                    <div className="work-descr">모든 html 페이지</div>
                    <div className="work-do">디자인 및 퍼블리싱</div>
                    <div className="work-tech">HTML, CSS, javascript, jquery, Bootstrap</div>
                    <div className="work-comment">원페이지 부트스트랩으로 제작하였습니다. 마우스 이동시 연기효과를 주는 canvas이펙트를 구글링하여 적용시켰습니다.<br/>개인 프로젝트가 아니므로 목업으로 사진으로만 올리는점 양해 바랍니다.</div>
                    </div></a></li>
                <li className="work-item doNotShow publish"><a href="#" onClick={preDefault}>
                    <div className="work-image"><img src="assets/images/work-9.jpg" alt="Portfolio Item"/></div>
                    <div className="work-caption font-alt">
                    <h3 className="work-title">Arthive(mobile)</h3>
                    <div className="work-descr">모든 html 페이지</div>
                    <div className="work-do">퍼블리싱</div>
                    <div className="work-tech">HTML, CSS, javascript, jquery</div>
                    <div className="work-comment">디자인받은 것을 바탕으로 하드코딩제작<br/>개인 프로젝트가 아니므로 목업으로 사진으로만 올리는점 양해 바랍니다.</div>
                    </div></a></li>
                <li className="work-item doNotShow publish"><a href="#" onClick={preDefault}>
                    <div className="work-image"><img src="assets/images/work-10.jpg" alt="Portfolio Item"/></div>
                    <div className="work-caption font-alt">
                    <h3 className="work-title">Arthive(pc)</h3>
                    <div className="work-descr">모든 html 페이지</div>
                    <div className="work-do">퍼블리싱</div>
                    <div className="work-tech">HTML, CSS, javascript, jquery</div>
                    <div className="work-comment">디자인받은 것을 바탕으로 하드코딩제작, 전문 디자이너분께서 디자인 해주신만큼 좀 더 css에서 고민을 하고 다른 방법으로 구현이 가능하도록 찾아보고 시도해보면서 완성하였습니다.<br/>개인 프로젝트가 아니므로 목업으로 사진으로만 올리는점 양해 바랍니다.</div>
                    </div></a></li>
                <li className="work-item webdesign publish frontend"><a href="https://web-project-client-ly8jj5ex325dab7e.sel5.cloudtype.app/" target='_blank'>
                    <div className="work-image"><img src="assets/images/work-11.jpg" alt="Portfolio Item"/></div>
                    <div className="work-caption font-alt">
                    <h3 className="work-title">Eggbnb(pc)<span>팀 프로젝트</span></h3>
                    <div className="work-descr">Header,Footer / 메인 / 상세 / 계정 페이지</div>
                    <div className="work-do">디자인, 퍼블리싱, 프론트엔드, 서버구현</div>
                    <div className="work-tech">HTML, CSS, React, Redux, Nodejs, Express, Mongoose, Kakao map</div>
                    <div className="work-comment">제작기간 1달 반, Airbnb를 참고하여 만든 국내 숙박시설 예약사이트입니다. 기능으로는 로그인, 회원가입, 검색, 숙소필터, 계정정보수정, 예약, 위시리스트 등록이 가능합니다. 모든 데이터는 몽고db에 저장되어있으며 몽고db에서 데이터를 불러옵니다. React를 배우고 처음 만든 프로젝트이며 다양한 라이브러리를 접해볼 수 있었던점이 컸던 것 같습니다. 배포되어있으므로 클릭하여 확인이 가능합니다.</div>
                    </div></a></li>
                <li className="work-item doNotShow webdesign publish"><a href="#" onClick={preDefault}>
                    <div className="work-image"><img src="assets/images/work-12.jpg" alt="Portfolio Item"/></div>
                    <div className="work-caption font-alt">
                    <h3 className="work-title">Nestado<span>팀 프로젝트</span></h3>
                    <div className="work-descr">메인 / 카테고리 / 회원가입 / 베스트 / 행사상품 / 신제품</div>
                    <div className="work-do">디자인 및 퍼블리싱</div>
                    <div className="work-tech">HTML, CSS, javascript, jquery</div>
                    <div className="work-comment">제작기간 1달, 레퍼런스 사이트는 네이처 리퍼블릭이며 퍼블리싱 기술을 익히고 처음 참여한 팀프로젝트입니다. javascript와 jquery로 Dom의 애니메이션을 제어하였습니다.</div>
                    </div></a></li>
            </ul>
        </section>
    );
};

export default Work;