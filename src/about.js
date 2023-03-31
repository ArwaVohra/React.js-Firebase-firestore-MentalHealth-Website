import React from 'react';
import Navibar from './navibar';
import Foot from './foot';

import { Link } from 'react-router-dom';
import './App.css';

// import './App.css';


function About() {
    return (
        <div>
            <Navibar />



            <section id="contact" className="position-relative section      before-content">
                <div className="container text-center">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts">About Us</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}






                    <div className="carousel-item active          ">
                        <div className="card testmonial-card border  aboutfont">
                            <div className="card-body  ">

                                <p >
                                    Our mission is making professional therapy accessible, affordable and convenient so anyone who struggles with life's challenges can get help anytime and anywhere.
                                </p>
                                <p  > Our website provides licensed ,trained, experienced and accredited psychologists (PhD/PsyD) , individual and family therapists (LMFT) and board licensed professional counselors (LPC)</p>
                                <p  >All of these services will do an ‘assessment’ to work out what treatments might be best for our patients, and then work with our patients to figure out what will help them the best.</p>
                                {/* <h1 className="title">Dr. Arwa Vohra</h1>
                                        <h1 className="subtitle">MBBS, MD(Psychiatry)</h1> */}
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <div>
                <img className='aboutimg' src={process.env.PUBLIC_URL + "myimg/about.jpeg"} />

            </div>


            <Foot />

        </div>
    )
}
export default About;