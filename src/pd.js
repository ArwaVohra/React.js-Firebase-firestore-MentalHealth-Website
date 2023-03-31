import React from 'react';
import Foot from './foot';
import Navibar from './navibar';

function Pd(){
    return(
        <div>
        <div >
            <Navibar />
            <section id="contact" className="position-relative section      before-content   bgg ">
                <div className="container text-center aboutfont ">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h1 className="section-title mb-4  tfonts ">Personality Disorder</h1>
                    {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                    <section id="portfolio" className="section ">
                        <div className="container text-center">

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                        <img src={process.env.PUBLIC_URL + "pd/pd1.jpeg"} />



                                    </div>
                                    <div className="img-wrapper">

                                        <img src={process.env.PUBLIC_URL + "pd/pd2.jpeg"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pd/pd3.jpeg"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pd/pd4.jpeg"} />





                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pd/pd5.jpeg"} />





                                    </div>
                                    <div className="img-wrapper">
                                        <img src={process.env.PUBLIC_URL + "pd/pd6.jpeg"} />




                                    </div>
                                </div>

                            </div>


                        </div>

                        <b>A wide range of behaviors are associated with pd. Some of the more common ones include:

                            having trouble focusing or concentrating on tasks
                            being forgetful about completing tasks
                            being easily distracted
                            having difficulty sitting still
                            interrupting people while they’re talking</b>
                        <div>
                            <b>Attention deficit hyperactivity disorder (pd) can cause hyperactivity, difficulty focusing, fatigue, impulsivity, and inattentiveness. You may only experience some of these symptoms, depending on your type. pd can seriously interfere with day-to-day functioning.
                            </b>
                            <b>Attention deficit hyperactivity disorder (pd) is a mental health condition that can cause unusual levels of hyperactivity and impulsive behaviors. People with pd may also have trouble focusing their attention on a single task or sitting still for long periods of time.</b>

                            <b>Treatment for pd typically includes behavioral therapies, medication, or both.

                                Types of therapy include psychotherapy, or talk therapy. With talk therapy, you or your child will discuss how pd affects your life and ways to help you manage it.

                                Another therapy type is behavioral therapy. This therapy can help you or your child learn how to monitor and manage your behavior.

                                Medication can also be very helpful when you’re living with pd. pd medications are designed to affect brain chemicals in a way that enables you to better control your impulses and action</b>
                        </div>
                    </section>

                </div>
            </section>

            <div className='mt-5'>

            </div>


            <Foot />
        </div>
    </div>
    )
}export default Pd;