/* C:\Work\100_project_Blog\01_iPortfolio\frontend-typescript\src\pages\Home.tsx */
import React, { useEffect } from "react";
import initMain from "../assets/js/main.js";


export default function Home() {
  useEffect(() => {
    initMain();
  }, []);
  return (
    // TODO: JSX
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="w-flex flex-column">

          <div className="profile">
            <img src="assets/img/cat.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">신 동구</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://shins99.tistory.com/" className="tistory"><i className="bx bi-type-bold"></i></a>
              <a href="https://github.com/shsh99" className="github"><i className="bx bxl-github"></i></a>

            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#education" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Education</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>개발자 신동구의 profile</h1>
          <p>I'm <span className="typed" data-typed-items="Web Developers"></span></p>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">

        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container">

            <div className="section-title">
              <h2>About Me</h2>

            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Java &amp; Spring Web Developer.</h3>

                <p className="fst-italic">
                  <strong><br></br>인적사항<br></br></strong>
                  {/* <a href="https://github.com/shsh99" className="github">GitHub</a><br></br>
                  <a href="https://shins99.tistory.com/" className="tistory">Blog</a> */}
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <br></br>
                      <li><i className="bi bi-chevron-right"></i> <strong>생년월일 :</strong> <span>1999년 05월 29일</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>연락처 :</strong> <span>010 - 7772 - 6729</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>주소 :</strong> <span>부산광역시 수영구 광안동</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <br></br>
                      <li><i className="bi bi-chevron-right"></i> <strong>나이 :</strong> <span>만 24세</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Degree :</strong> <span>Master</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>이메일 :</strong> <span>ggg9905@naver.com <br></br>ggg672948@gmail.com</span></li>

                    </ul>
                  </div>
                </div>
              </div>

            </div>
            {/* <h3>
              learn and do it <br></br>
              끊임없이 배우고 실행하는 개발자
            </h3> */}
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Facts Section ======= --> */}
        <section id="facts" className="facts">
          <div className="container">

            <div className="section-title">
              <h2>
                learn and do it <br></br>
                끊임없이 배우고 실행하는 개발자
              </h2>
              <p></p>
            </div>

            {/* <div className="row no-gutters">

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Happy Clients</strong> consequuntur quae</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="count-box">
                  <i className="bi bi-headset"></i>
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                <div className="count-box">
                  <i className="bi bi-people"></i>
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                </div>
              </div>

            </div> */}

          </div>
        </section>
        {/* <!-- End Facts Section --> */}

        {/*     <!-- ======= Skills Section ======= --> */}
        <section id="skills" className="skills section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Skill</h2>
              <p> 기술 스택</p>
            </div>

            <div className="row skills-content">

              <div className="col-lg-6" data-aos="fade-up">

                <div className="progress">
                  <span className="skill">HTML <i className="val"></i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">CSS <i className="val"></i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">JavaScript <i className="val"></i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>

                <div className="progress">
                  <span className="skill">typescript <i className="val"></i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">JAVA <i className="val"></i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">SpringBoot <i className="val"></i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Skills Section --> */}

        {/* <!-- ======= Resume Section ======= --> */}
        <section id="education" className="resume">
          <div className="container">

            <div className="section-title">
              <h2>Education</h2>
              <p></p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">학력</h3>
                <div className="resume-item pb-0">
                  <h4>4년제 대학 졸업 - 학사</h4>
                  <p><em></em></p>
                  <ul>
                    <li>학교명 : 부산 가톨릭 대학교</li>
                    <li>전공 : 경영학과 전공</li>
                    <li>재학기간 : 2018.03 ~ 2025.02 예정</li>
                  </ul>
                </div>

                <h3 className="resume-title">IT Education</h3>
                <div className="resume-item">
                  <h4>코드잇 <br></br>
                    대학생을 위한 코딩 캠프 11기
                  </h4>
                  <h5>2023.06.24 ~ 2023.07.26</h5>
                  <ul>
                    <li>기초 컴퓨터 사이언스 지식 교육 수강 완료</li>
                    <li>Chat GPT 활용 교육 수강 완료</li>
                    <li>git 버전관리 및 활용법 수강 완료</li>
                  </ul>
                </div>

              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">IT Education</h3>
                <div className="resume-item">
                  <h4>그린 컴퓨터 아카데미 <br></br> 자바 &amp; 스프링 웹 개발 과정</h4>
                  <h5>2023.08 ~ 2023.12</h5>
                  <ul>
                    <li>Java, oracle, Spring 등 응용 SW기술 교육 이수</li>
                    <li>Linux OS, Hadoop 환경 구축 교육 이수</li>
                    <li>Android app개발 및 아두이노, 각종 통신 교육 이수</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Resume Section --> */}

        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Portfolio</h2>
              <p>작업물
              </p>
            </div>

            {/* <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div> */}

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">



              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  {/* <video muted autoPlay loop>
                    <source src="https://tv.kakao.com/v/441575995" type="video" />
                  </video> */}
                  <iframe width="600" height="400" src="https://tv.kakao.com/v/441575995" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <iframe width="600" height="400" src="https://tv.kakao.com/v/441575995"></iframe>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="https://tv.kakao.com/v/441575995" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="https://tv.kakao.com/v/441575995" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div> */}







            </div>

          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        {/* <section id="services" className="services">
          <div className="container">

            <div className="section-title">
              <h2>Services</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div className="icon"><i className="bi bi-briefcase"></i></div>
                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon"><i className="bi bi-card-checklist"></i></div>
                <h4 className="title"><a href="">Dolor Sitema</a></h4>
                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i className="bi bi-bar-chart"></i></div>
                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon"><i className="bi bi-binoculars"></i></div>
                <h4 className="title"><a href="">Magni Dolores</a></h4>
                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="bi bi-brightness-high"></i></div>
                <h4 className="title"><a href="">Nemo Enim</a></h4>
                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                <div className="icon"><i className="bi bi-calendar4-week"></i></div>
                <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>

          </div>
        </section> */}
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}

        {/* <!-- End Testimonials Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container">

            <div className="section-title">
              <h2>Contact</h2>
              <p>작성자 정보</p>
            </div>

            <div className="row" data-aos="fade-in">

              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>거주지 :</h4>
                    <p>부산광역시 수영구 광안동</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email :</h4>
                    <p>ggg9905@naver.com</p>
                    <p>ggg672948@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>연락처 :</h4>
                    <p>010-7772-67209</p>
                  </div>

                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameBorder={0} style={{ border: 0, width: 100 + "%", height: 290 + "px" }} allowFullScreen></iframe>
                </div>

              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" className="form-control" id="name" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea className="form-control" name="message" rows={10} required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Contact Section --> */}

      </main>
      {/* <!-- End #main --> */}

      {/*   <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>iPortfolio</span></strong>
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. --> */}
            {/* <!-- You can delete the links only if you purchased the pro version. --> */}
            {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
            {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
      {/* <!-- End  Footer --> */}

    </>
  );
}
