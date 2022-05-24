import React from "react";
import './team.css';

const team = () => (
    <section className="bg-light-blue" data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">

        <div className="container align-items-stretch  align-items-center pb-5">
            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12 text-center">
                    <p>
                        <b><h2>
             OUR TEAM
             </h2></b>
                    </p>
                </div>
            </div>
            <div className="container justify-content-center p-3">
                <div className="d-grid gap-lg-3 justify-content-center mt-3 d-flex" style="flex-direction: row;">
                    <div className="btn-group-toggle d-flex d-grid gap-lg-3 gap-sm-0" data-toggle="buttons">
                        <button className="btn btn-primary active btn-md text-nowrap tr" id="tact1">
                            POST BEARERS
                        </button>
                        <button className="btn btn-primary btn-md text-nowrap tr" id="tact2" onclick="toscroll(0, 1500)">
                            FACULTY ADVISORS
                        </button>
                    </div>
                </div>
            </div>



            <div className="row p-5 justify-content-evenly">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow " data-aos="fade-up">
                        <img className="card-img-top h-75" src="img/Arka_Dada.jpeg" alt="Arka Seth" />
                        <div className="card-body py-3 text-center pb-3">
                            <h5 className="mt-3">ARKA SETH</h5>
                            <span>Chair</span>
                        </div>


                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow resize" data-aos="fade-up">
                        <img className="card-img-top h-75" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" alt="Bishwajit Ghosh" />
                        <div className="card-body py-3 text-center pb-3">
                            <h5 className="mt-3">BISHWAJIT GHOSH</h5>
                            <small>Vice Chair</small>
                        </div>

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow" data-aos="fade-up">
                        <img className="card-img-top h-75" src="img/Vaishali_Didi.png" alt="Vaishali Barua" />
                        <div className="card-body py-3 text-center pb-3">
                            <h5 className="mt-3">VAISHALI BARUA</h5>
                            <small>Treasurer</small>
                        </div>

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow" data-aos="fade-up">
                        <img className="card-img-top h-75" src="img/Abhishek.jpg" alt="Abhishek Basu" />
                        <div className="card-body py-3 text-center pb-3">
                            <h5 className="mt-3">ABHISHEK BASU</h5>
                            <small>Secretary</small>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="advisors text-center p-4" data-aos="fade-up">
                        <p>
                            <b>
                                <h2>
                                <br />
                                <br />
                                <br />
                            OUR ADVISORS
                                
                                </h2>
                            </b>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow" data-aos="fade-up">
                        <img className="card-img-top" src="img/Aniruudha_Sir.jpg" alt="DR. ANIRUDDHA CHANDRA" />
                        <div className="card-body py-3 text-center pb-3 d-md-block">
                            <h5 className="mt-3">ANIRUDDHA CHANDRA</h5>
                            <small>Professor, Department of Electronics and Communication Engineering</small>

                        </div>

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow" data-aos="fade-up">
                        <img className="card-img-top" src="" alt="DR. MAMATA DOLUI" />
                        <div className="card-body py-3 text-center pb-3">
                            <h5 className="mt-3">MAMATA DALUI</h5>
                            <small>Assistant Professor, Department of Computer Science and Engineering</small>


                        </div>

                    </div>
                </div>

            </div>

        </div>
        <button type="button" className="btn btn-outline-primary btn-lg" id="to-top">
        <i className="fas fa-chevron-up"></i>
        </button>

    </section>

);

export default team