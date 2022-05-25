import React from "react";
import './team.css';
import img1 from '../../assets/Arka_Dada.jpeg';
import img2 from '../../assets/Bishwajit_Dada.jpg';
import img3 from '../../assets/Abhishek_Dada.jpg';
import img4 from '../../assets/Vaishali_Didi.png';
import img5 from '../../assets/Aniruddha_Sir.jpg';




const Team = () => (
    <section className="bg-light-blue" data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
        <div className="container align-items-stretch  align-items-center pb-5">
            <div className="row">
                <div className="text-center">
                    <p data-aos="fade-up">
                        <b><h2 className="heading">
             OUR TEAM
             </h2></b>
                    </p>
                </div>
            </div>
            


            <div className="row p-5 justify-content-evenly">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow " data-aos="fade-up">
                        <img className="card-img-top h-75" src={img1} alt="Arka Seth" />
                        <div className="card-body py-3 text-center pb-3">
                            <h5 className="mt-3">ARKA SETH</h5>
                            <span>Chair</span>
                        </div>


                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow resize" data-aos="fade-up">
                        <img className="card-img-top h-75" src={img2} alt="Bishwajit Ghosh" />
                        <div className="card-body py-3 text-center pb-3">
                            <h5 className="mt-3">BISHWAJIT GHOSH</h5>
                            <small>Vice Chair</small>
                        </div>

                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow" data-aos="fade-up">
                        <img className="card-img-top h-75" src={img3} alt="Abhishek Basu" />
                        <div className="card-body py-3 text-center pb-3">
                            <h5 className="mt-3">ABHISHEK BASU</h5>
                            <small>Secretary</small>
                        </div>

                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow" data-aos="fade-up">
                        <img className="card-img-top h-75" src={img4} alt="Vaishali Barua" />
                        <div className="card-body py-3 text-center pb-3">
                            <h5 className="mt-3">VAISHALI BARUA</h5>
                            <small>Treasurer</small>
                        </div>

                    </div>
                </div>
                
                <div className="container">
                    <div className="advisors text-center p-4" data-aos="fade-up">
                        <p>
                            <b>
                                <h2 className="heading">
                                <br />
                                <br />
                                <br />
                            OUR FACULTY ADVISORS
                                
                                </h2>
                            </b>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow" data-aos="fade-up">
                        <img className="card-img-top Sir" src={img5} alt="DR. ANIRUDDHA CHANDRA" />
                        <div className="card-body py-3 text-center pb-3">
                            <h5 className="mt-3">ANIRUDDHA CHANDRA</h5>
                            <small>Professor, Department of Electronics and Communication Engineering</small>

                        </div>

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <div className="card align-content-center shadow" data-aos="fade-up">
                        <img className="card-img-top Maam" src="https://nitdgp.ac.in/uploads/b6d3a9ac24d1b8797f9962b20ff019c0.jpg" alt="DR. MAMATA DALUI" />
                        <div className="card-body py-3 text-center pb-3">
                            <h5 className="mt-3">MAMATA DALUI</h5>
                            <small>Assistant Professor, Department of Computer Science and Engineering</small>


                        </div>

                    </div>
                </div>

            </div>

        </div>

    </section>

);

export default Team