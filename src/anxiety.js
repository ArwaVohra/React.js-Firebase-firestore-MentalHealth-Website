import React from 'react';
import Navibar from './navibar';
import Foot from './foot';
import './App.css';


function Anxiety() {
    return (
        <div>
            <div >
                <Navibar />
                <section id="contact" className="position-relative section      before-content   bgg ">
                    <div className="container text-center aboutfont ">
                        {/* <h6 className="subtitle">Contact</h6> */}
                        <h1 className="section-title mb-4  tfonts ">Anxiety & Panic attack</h1>
                        {/* <p className="mb-5 pb-4">on various mental health conditions people might suffer through.</p> */}




                        <section id="portfolio" className="section ">
                            <div className="container text-center">

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            {/* <img src={process.env.PUBLIC_URL + "imgs/folio-1.jpg"} /> */}
                                            <img src={process.env.PUBLIC_URL + "anxiety/1.jpg"} />



                                        </div>
                                        <div className="img-wrapper">

                                            <img src={process.env.PUBLIC_URL + "anxiety/4.jpg"} />




                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "anxiety/8.jpg"} />




                                        </div>
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "anxiety/9.jpg"} />




                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "anxiety/5.jpg"} />




                                        </div>
                                        <div className="img-wrapper">
                                            <img src={process.env.PUBLIC_URL + "anxiety/10.png"} />



                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div className='ml-5 mr-5 text-secondary'>
                                <b >An anxiety attack tends to occur in response to certain stressors and may build gradually while panic attacks can occur unexpectedly and abruptly. Both may indicate an underlying health condition
                                </b>
                                <div>
                                    <b>Symptoms of anxiety include:
                                        <ol>worry</ol>
                                        <ol>distress</ol>
                                        <ol>fear</ol>

                                    </b>
                                    <b>If caught yourself in the middle of an anxiety/panic attack...</b>
                                    <b>Take slow deep breaths:</b>
                                    <b>Practice mindfulness</b>
                                    <b>Use relaxation techniques:</b>
                                    <b>Reduce and manage sources of stress in your life.
                                        Learn how to identify and stop negative thoughts.
                                        Get regular, moderate exercise.
                                        Practice meditation or yoga.
                                        Eat a balanced diet.
                                        Join a support group for people with anxiety or panic attacks.
                                        Limit your consumption of alcohol and caffeine as well as the use of drugs.</b>
                                </div>
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
}

export default Anxiety;