import React from 'react';
import Navibar from './navibar'
import Signup from './singup';
import Foot from './foot';
import './App.css';
import { Link } from 'react-router-dom';

// import { FaHeart } from "react-icons/fa";

function Home() {
    return (
        <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home"   >
            {/* <FaHeart /> */}
            {/* <!-- Page navigation --> */}
            <Navibar />
            {/* <!-- End of page navibation --> */}

            {/* <!-- Page Header --> */}
            <header className="header" id="home">
                <div className="container">
                    <div className="infos">
                        <h1 className="subtitle">we are</h1>
                        <h6 className="title">Always There</h6>
                        <h6 className="title">For You</h6>

                        {/* <p>UI/UX Designer</p> */}

                        {/* <div className="buttons pt-3">
                            <button className="btn btn-primary rounded">HIRE ME</button>
                            <button className="btn btn-dark rounded">DOWNLOAD CV</button>
                        </div> */}

                        {/* <div className="socials mt-4">
                            <a className="social-item" href="#"><i className="ti-facebook"></i></a>
                            <a className="social-item" href="#"><i className="ti-google"></i></a>
                            <a className="social-item" href="#"><i className="ti-github"></i></a>
                            <a className="social-item" href="#"><i className="ti-twitter"></i></a>
                        </div> */}
                    </div>
                    <div className="img-holder">
                        {/* <img src="assets/imgs/man.svg" alt=""></img> */}
                        <img src={process.env.PUBLIC_URL + "myimg/home.jpeg"} />

                    </div>
                </div>

                {/* <!-- Header-widget --> */}
                <div className="widget">
                    <div className="widget-item">
                        <h2>MANY</h2>
                        <p>Blogs</p>
                    </div>
                    <div className="widget-item">
                        <h2>MANY</h2>
                        <p>Aspects</p>
                    </div>
                    <div className="widget-item">
                        <h2>MANY</h2>
                        <p>Consultants</p>
                    </div>
                </div>
            </header>
            {/* <!-- End of Page Header --> */}

            {/* <!-- About section --> */}
            {/* <section id="about" className="section mt-3">
                <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            <img src="assets/imgs/avatar.jpg" alt="" className="img-thumbnail mb-4"></img>
                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">James Smith</h6>
                            <p className="subtitle">UI/UX Designer</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, pariatur, aperiam aut autem voluptas odit. Odio ducimus delectus totam sed aliquam sequi praesentium mollitia, illum repudiandae quidem quod, magni magnam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non. Laborum repellendus consequatur ullam voluptatum asperiores.</p>
                            <button className="btn btn-primary rounded mt-3">DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <!-- Service section --> */}


            {/* Blogs */}





            {/* Consultant snippet */}
            <section id="testmonial" className="section">
                <div className="container text-center  ">
                    {/* <h6 className="subtitle"> Counsellors </h6> */}
                    <div className='hometitle' >

                        <h1 className="section-title  tfonts  mb-4"> Counsellors</h1>
                        <p className="mb-5 pb-4">Feel enlightened and get appropriate guidence to leave behind your negative reasonings</p>
                    </div>

                    <div id="carouselExampleIndicators" className="carousel slide  " data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators " data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>





                        <div className="carousel-inner ">
                            <div className="carousel-item active   ">
                                <div className="card testmonial-card border">
                                    <div className="card-body  ">
                                        {/* <img src="assets/imgs/avatar-1.jpg" alt=""></img> */}
                                        <img src={process.env.PUBLIC_URL + "myimg/Arwa professional.jpg"} />

                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p> */}
                                        <div>
                                            CLICK BELOW TO KNOW MORE ABOUT

                                        </div>

                                        <h1 className="title">Dr. Arwa Vohra</h1>
                                        <h1 className="subtitle">MBBS, MD(Psychiatry)</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card testmonial-card border">
                                    <div className="card-body">
                                        {/* <img src="assets/imgs/avatar-2.jpg" alt=""></img> */}
                                        <img src={process.env.PUBLIC_URL + "myimg/heena.jpg"} />

                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p> */}

                                        <div>
                                            CLICK BELOW TO KNOW MORE ABOUT

                                        </div>


                                        <h1 className="title">Dr. Heena Mansuri</h1>
                                        <h1 className="subtitle">MBBS, DPM</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card testmonial-card border">
                                    <div className="card-body">
                                        {/* <img src="assets/imgs/avatar-3.jpg" alt=""></img> */}
                                        <img src={process.env.PUBLIC_URL + "myimg/afifa.jpeg"} />

                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p> */}
                                        <div>
                                            CLICK BELOW TO KNOW MORE ABOUT
                                        </div>

                                        <h1 className="title">Dr. Afifa Mansuri</h1>
                                        <h1 className="subtitle">MBBS, DNB</h1>
                                    </div>
                                </div>
                            </div>




                        </div>
                        <button className="btn btn-light rounded">

                            <Link to='/Consul' className='text-dark' >Click to Learn more</Link>
                        </button>
                    </div>

                </div>


            </section>

            {/* <!-- End of Sectoin --> */}




            {/* <!-- Portfolio section --> */}
            {/* img cluster for BLOGS */}
            <section id="portfolio" className="section">
                <div className="container text-center">
                    {/* <h6 className="subtitle">Portfolio</h6> */}
                    <h6 className="section-title mb-4   tfonts">Blogs</h6>
                    <p className="mb-5 pb-4"> Assist on various mental health conditions people might suffer through.</p>

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="img-wrapper">
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/anxiety.jpg"} />


                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>Anxiety</h5>
                                        <i className="ti-link"><Link to="/Anxiety" ></Link></i>
                                    </div>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                {/* <img src="assets/imgs/folio-2.jpg" alt=""></img> */}
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-2.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/adhd.jpg"} />


                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>ADHD</h5>
                                        <i className="ti-link"><Link to="/Adhd" ></Link></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="img-wrapper">
                                {/* <img src="assets/imgs/folio-3.jpg" alt=""></img> */}
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-3.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/others.jpg"} />


                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>Other issues</h5>
                                        <i className="ti-link"><Link to="/Other" ></Link></i>

                                    </div>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                {/* <img src="assets/imgs/folio-4.jpg" alt=""></img> */}
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-4.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/bipolar.jpg"} />


                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>Bipolar Disorder</h5>
                                        <i className="ti-link"><Link to="/Bp" ></Link></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="img-wrapper">
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-5.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/pmdd.jpg"} />


                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>PMDD</h5>
                                        <i className="ti-link"><Link to="/Pmdd" ></Link></i>

                                    </div>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                {/* <img src="assets/imgs/folio-6.jpg" alt=""></img> */}
                                {/* <img src={process.env.PUBLIC_URL + "imgs/folio-6.jpg"} /> */}
                                <img src={process.env.PUBLIC_URL + "myimg/ptsd.jpg"} />

                                <div className="overlay">
                                    <div className="overlay-infos">
                                        <h5>PTSD</h5>
                                        <i className="ti-link"><Link to="/Ptsd" ></Link></i>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button className="btn btn-primary rounded">

                            <Link to='/Blog' className='text-dark' >Click to Learn more</Link>
                        </button>
                    </div>

                </div>
            </section>
            {/* <!-- End of portfolio section --> */}






            {/* <!-- Skills section --> */}
            {/* NOT IN USE */}
            {/* <section className="section">
                <div className="container text-center">
                    <h6 className="subtitle">Skills</h6>
                    <h6 className="section-title mb-4">Why Choose me</h6>
                    <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos.  rerum commodi corrupti, temporibus non quam.</p>

                    <div className="row text-left">
                        <div className="col-sm-6">
                            <h6 className="mb-3">Photoshop</h6>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>89%</span></div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h6 className="mb-3">Web Design</h6>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>83%</span></div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h6 className="mb-3">App Design</h6>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h6 className="mb-3">SEO</h6>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>90%</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}




            {/* ASSPECTS SNIPPET */}


            <section id="blog" className="section     before-content ">


                <div className="container text-center ">
                    <div className='titles' >
                        {/* <h6 className="subtitle ">use our</h6> */}
                        <h6 className="section-title mb-2    tfonts">Mind Reviving Aspects</h6>
                        <p className="mb-5 pb-4">Feel enlighten and leave behind your negative reasonings</p>
                    </div>

                    {/* ************************  MEDICATION ******************************** */}

                    <div className="row text-left">
                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/pod.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Dr. Laurie Santos' 5 Favorite Coping Tips | #WithMe for World Mental Health Day</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Dr. Laurie Santos</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>In honor of World Mental Health Day, Yale Professor of Psychology Dr. Laurie Santos shares her top 5 favorite coping tips according to science. On October 10th - World Mental Health Day</p>
                                    <a href="https://www.youtube.com/watch?v=kCQim9VrnDY">Read More..</a>
                                </div>
                            </div>
                        </div>

                        {/* ************************ 2 *********************** */}

                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/pod2.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">Mental Health Moment: The Road // The Hilarious World of Depression</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: The Hilarious World of Depression</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>We’ve been sharing short and simple videos all of Mental Health Awareness Month on tips from our listeners that help keep them mentally healthy</p>
                                    <a href="https://www.youtube.com/@thehilariousworldofdepress2874">Read More..</a>
                                </div>
                            </div>
                        </div>


                        {/* ************************ 3 *********************** */}


                        <div className="col-md-4">
                            <div className="card border mb-4">
                                {/* <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top w-100"></img> */}
                                <img className='card-img-top' src={process.env.PUBLIC_URL + "myimg/pod3.jpeg"} />

                                <div className="card-body">
                                    <h5 className="card-title">The Science of Depression | Sona Dimidjian | Podcast Episode 413</h5>
                                    <div className="post-details">
                                        <a href="#">Posted By: Ten Percent Happier</a>
                                        {/* <a href="#"><i className="ti-thumb-up"></i> 456</a>
                                        <a href="#"><i className="ti-comment"></i> 123</a> */}
                                    </div>
                                    <p>This episode features one of the world’s leading experts in depression and how meditation can help. Dr. Sona Dimidjian is a professor in the Department of Psychology and Neuroscience.</p>
                                    <a href="https://www.youtube.com/watch?v=QXz8uOU3CXs">Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div>
                        <button className="btn btn-light rounded">

                            <Link to='/Aspect' className='text-dark' >Click to Learn more</Link>
                        </button>
                    </div>



                </div>
            </section>













            {/* <!-- End of Skills sections --> */}








            <Signup />




            {/* <!-- Blog Section --> */}
            {/* kept in aspectmodule */}



            {/* <!-- Hire me section --> */}
            {/* footer - still not registered..???? */}

            {/* <!-- End od Hire me section. --> */}

            {/* <!-- Contact Section --> */}
            {/* <!-- End of Contact Section --> */}

            {/* <!-- Page Footer --> */}
            <Foot />
            {/* <!-- End of page footer --> */}
            {/* <!-- End of page footer --> */}

            {/* <!-- core  --> */}
            {/* <script src="assets/vendors/jquery/jquery-3.4.1.js"></script> */}
            {/* <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script> */}
            {/* <!-- bootstrap 3 affix --> */}
            {/* <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script> */}

            {/* <!-- steller js --> */}
            {/* <script src="assets/js/steller.js"></script> */}

        </div>
    );
}

export default Home;
