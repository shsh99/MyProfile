// HeaderCom.tsx : rfce
import React from 'react'

function HeaderCom() {
    return (
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src="assets/img/cat.jpg" alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">신동구의 프로필</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                            <li><a href="#education" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Education</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                    {/* <!-- .nav-menu --> */}
                </div>
            </header>
            {/* <!-- End Header --> */}
        </>
    )
}

export default HeaderCom