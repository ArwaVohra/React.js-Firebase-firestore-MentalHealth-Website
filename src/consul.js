import React from 'react';
import { useState, useEffect } from 'react';
import Foot from './foot';
import Navibar from './navibar';
import Bookapt from './bookapt';
import { Link } from 'react-router-dom';
import { db } from './firebase-config'
import { collection, addDoc, getDocs } from "firebase/firestore";


function Consul() {

    const [Consultant, setConsultant] = useState([]);
    const ConsultantCollectionRef = collection(db, "Consultant")


    useEffect(() => {
        const getConsultant = async () => {
          const data = await getDocs(ConsultantCollectionRef);
          setConsultant(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getConsultant();
      }, []);

// _____________LOCAL STORAGE__________________________________

    // const gotCname = localStorage.getItem('Cname');
    // const gotCpassword = localStorage.getItem('Cpassword');
    // const gotCphone_no = localStorage.getItem('Cphone_no');
    // const gotCaca = localStorage.getItem('Caca');
    // const gotCspeci = localStorage.getItem('Cspeci');
    // const gotCemail_id = localStorage.getItem('Cemail_id');
    // const gotCphoto = localStorage.getItem('Cphoto');



    // const storedConsultant = localStorage.getItem('consultant');

// ___________CHAT COLUMN_________________


    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);
    const [showPopup5, setShowPopup5] = useState(false);

    // ______________________________FIRESTORE____________________
    // const [Consultant, setConsultant] = useState([]);
    // const ConsultantCollectionRef = collection(db, "Consultant")

    // const [newConsul, setNewConsul] = useState(" Nothing selected")
    // const [newFeedback, setNewFeedback] = useState(" Nothing entered")



    // CHAT 1
    const openChat1 = () => {
        setShowPopup1(true);
        console.log('clicked on chat box!!!');
    };
    const closeChat1 = () => {
        setShowPopup1(false);
        console.log('clicked on CLOSE!!!');
    };


    // CHAT 2
    const openChat2 = () => {
        setShowPopup2(true);
        console.log('clicked on chat box!!!');
    };
    const closeChat2 = () => {
        setShowPopup2(false);
        console.log('clicked on CLOSE!!!');
    };

    // CHAT 3
    const openChat3 = () => {
        setShowPopup3(true);
        console.log('clicked on chat box!!!');
    };
    const closeChat3 = () => {
        setShowPopup3(false);
        console.log('clicked on CLOSE!!!');
    };

    // CHAT 4
    const openChat4 = () => {
        setShowPopup4(true);
        console.log('clicked on chat box!!!');
    };
    const closeChat4 = () => {
        setShowPopup4(false);
        console.log('clicked on CLOSE!!!');
    };

    // CHAT 5
    const openChat5 = () => {
        setShowPopup5(true);
        console.log('clicked on chat box!!!');
    };
    const closeChat5 = () => {
        setShowPopup5(false);
        console.log('clicked on CLOSE!!!');
    };



    return (
        <div>
            <Navibar />

           



            <section id="about" className="section   before-content">


                <div className="container text-center">
                    <div >
                        <h6 className="subtitle ">Meet our</h6>
                        <h6 className="section-title mb-2 tfonts">Consultants</h6>
                        <p className="mb-5 pb-4">Feel enlightened and get appropriate guidence to leave behind your negative reasonings</p>
                    </div>

                </div>




                <div className="container mt-0">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            {/* <img src="assets/imgs/avatar.jpg" alt="" className="img-thumbnail mb-4"></img> */}
                            <img className='img-thumbnail mb-4       shadow-lg p-3 mb-5 bg-white rounded     ' src={process.env.PUBLIC_URL + "myimg/Arwa professional.jpg"} />

                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">Dr. Arwa Vohra</h6>
                            <p className="subtitle">MBBS, MD(Psychiatry)</p>

                            {/* // startss */}
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            {/* <span className="fa fa-star"></span> */}

                            <p>Dr. Arwa Vohra is an eminent practicing psychiatrist with 5+ years of experience. She is a consultant psychiatrist at the Peroor Super Speciality Hospital & specializes in ADHD (Adult), de-addiction, sleep disorders, depression, anxiety, OCD, sexology,LGBTQ+ and marital problems. She has a multitude of research papers published under her name on geriatric psychiatry.</p>

                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>


                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat1} >Chat</button>

                            {showPopup1 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat1} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                           alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hello User</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> To ask any queries please contact on 123-456-7890
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}




                        </div>
                    </div>
                </div>










                {/* ________________________________________  2ND CONSULTANT  ________________________________________ */}


                <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            {/* <img src="assets/imgs/avatar.jpg" alt="" className="img-thumbnail mb-4"></img> */}
                            <img className='img-thumbnail mb-4   shadow-lg p-3 mb-5 bg-white rounded' src={process.env.PUBLIC_URL + "myimg/heena.jpg"} />

                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">Dr. Heena Mansuri</h6>
                            <p className="subtitle">MBBS, DPM</p>


                            {/* // startss */}
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>


                            <p>Dr. Heena is a thoughtful, patient-centered Psychologist with a vast experience in counselling. She is Compassionately committed to working with adolescents and adults requiring psychological assistance. Her approach mainly comprises of cognitive- behavioral, humanistic and psychodynamic counselling. She tailors out dialogue and treatment plan to meet your unique and specific needs in order to bring about positive/desired changes.</p>

                            {/* <p>Anxiety, Depression, OCD, Relationship Issues, Couple Counseling, Grief & Loss, Bipolar Disorder, Suicidal Ideation, Psychosis, Sleep Issues, Cognitive Rehabilitation, Trauma, Phobia, Family Therapy, Narcissistic Abuse, LGBTQI, Anger, Self Confidence, ADHD (Adult)</p> */}

                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>



                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat2} >Chat</button>

                            {showPopup2 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat2} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                           alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hello User</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> To ask any queries please contact on 123-456-7890
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}




                        </div>
                    </div>
                </div>









                {/* ------------------ 3 rd Consultant ----------------------------- */}




                <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            {/* <img src="assets/imgs/avatar.jpg" alt="" className="img-thumbnail mb-4"></img> */}
                            <img className='img-thumbnail mb-4       shadow-lg p-3 mb-5 bg-white rounded     ' src={process.env.PUBLIC_URL + "myimg/afifa.jpeg"} />


                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">Dr. Afifa Mansuri</h6>
                            <p className="subtitle">MBBS, DNB</p>

                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>




                            <p>Dr. Afifa is a counselling psychologist with 7 years of experience working with children, youth and adults. She is trained as a Cognitive Behavioral Therapist but adopts a multidisciplinary approach based on each clients needs. Her goal in therapy is to provide clients with a safe space to explore their feelings and behaviors. She believes everyone has their own answers and supports her clients through their journey of exploring and finding their answers.</p>


                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, pariatur, aperiam aut autem voluptas odit. Odio ducimus delectus totam sed aliquam sequi praesentium mollitia, illum repudiandae quidem quod, magni magnam.</p> */}

                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non. Laborum repellendus consequatur ullam voluptatum asperiores.</p> */}
                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>

                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat3} >Chat</button>

                            {showPopup3 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat3} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
               alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hello User</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> To ask any queries please contact on 123-456-7890
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                {/* ------------------ 4 th Consultant ----------------------------- */}



                <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            <img className='img-thumbnail mb-4   shadow-lg p-3 mb-5 bg-white rounded' src={process.env.PUBLIC_URL + "imgs/avatar.jpg"} />

                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">James Smith</h6>
                            <p className="subtitle">MA in Counselling Psychology</p>


                            {/* // startss */}
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>


                            <p>James is a certified Health Psychologist and a former research scientist who worked at ICMR with more than 4 years of experience in healthcare research and counselling practice. He specializes in relationship counselling, wellness psychoeducation, educational and career guidance, eclectic psychotherapy, trauma care, chronic pain counselling, palliative care and substance use care.</p>
                            {/* <p>Anxiety, Depression, OCD, Relationship Issues, Couple Counseling, Grief & Loss, Bipolar Disorder, Suicidal Ideation, Psychosis, Sleep Issues, Cognitive Rehabilitation, Trauma, Phobia, Family Therapy, Narcissistic Abuse, LGBTQI, Anger, Self Confidence, ADHD (Adult)</p> */}
                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>

                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat4} >Chat</button>

                            {showPopup4 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat4} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
               alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hello User</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> To ask any queries please contact on 123-456-7890
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}

                        </div>
                    </div>
                </div>



                {/* ------------------ 5 th Consultant ----------------------------- */}


                <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            {/* <img src="assets/imgs/avatar.jpg" alt="" className="img-thumbnail mb-4"></img> */}
                            <img className='img-thumbnail mb-4   shadow-lg p-3 mb-5 bg-white rounded' src={process.env.PUBLIC_URL + "imgs/avatar-2.jpg"} />

                        </div>
                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">Darren Watson</h6>
                            <p className="subtitle">Msc in Health Psychology (gold medalist)</p>


                            {/* // startss */}
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>


                            <p>Darren, a gold medallist in psychology, has been practicing professionally for 5 years now. He believes in being compassionate, understanding, & maintaining a friendly demeanour with his clients in any situation. He seeks to change the mental health awareness level in India for the better.</p>
                            {/* <p>Anxiety, Depression, OCD, Relationship Issues, Couple Counseling, Grief & Loss, Bipolar Disorder, Suicidal Ideation, Psychosis, Sleep Issues, Cognitive Rehabilitation, Trauma, Phobia, Family Therapy, Narcissistic Abuse, LGBTQI, Anger, Self Confidence, ADHD (Adult)</p> */}
                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>

                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat5} >Chat</button>

                            {showPopup5 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat5} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
               alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hello User</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> To ask any queries please contact on 123-456-7890
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                {/* ___________________________________________FROM - LOCAL STORAGE _____________ */}


                {/* <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            <img className='img-thumbnail mb-4   shadow-lg p-3 mb-5 bg-white rounded'  src={process.env.PUBLIC_URL + "myimg/anonymous.jpg"} alt='NO image uploaded' /> */}
                {/* src={process.env.PUBLIC_URL +  `{gotCphoto && (<div>{gotCphoto}</div>)}}` */}
                {/* </div> */}



                {/* Cname, Cpassword,Cphone_no,Caca,Cspeci,Cemail_id,Cphoto, */}

                {/* <div className="pl-md-4 col-md-9">
                            <h6 className="title"> {gotCname && (
                                <div> {gotCname} </div>
                            )}  </h6>
                            <div className="subtitle"> {gotCaca && (
                                <p>{gotCaca}</p>
                            )}  </div> */}


                {/* // startss */}
                {/* <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>


                            <div> {gotCspeci && (
                                <p> {gotCspeci} </p>
                            )}  </div> */}
                {/* <p>Anxiety, Depression, OCD, Relationship Issues, Couple Counseling, Grief & Loss, Bipolar Disorder, Suicidal Ideation, Psychosis, Sleep Issues, Cognitive Rehabilitation, Trauma, Phobia, Family Therapy, Narcissistic Abuse, LGBTQI, Anger, Self Confidence, ADHD (Adult)</p> */}
                {/* <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>

                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat4} >Chat</button>

                            {showPopup4 && gotCphone_no && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat4} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start"> */}
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
               alt="avatar 1" > </img> */}
                {/* <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hello User</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> To ask any queries please contact on <b>{gotCphone_no}</b>
                                                                    </p> */}
                {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                {/* </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div> */}
                {/* )}

                        </div>
                    </div>
                </div>







 */}









                {/* __________________________________________FIRESTORE_______________________________________________ */}

{Consultant.map((Consultant, index) => { 
  return <div key={index} >
    {/* <b>{index+1} .</b>
    <b>Consultant Name :</b>  {Consultant.c_name} <br/>
    <b>Speci :</b>   {Consultant.c_speci}
    <hr/> */}
    <div className="container mt-5">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3">
                            <img className='img-thumbnail mb-4   shadow-lg p-3 mb-5 bg-white rounded' src={process.env.PUBLIC_URL + "myimg/anonymous.jpg"} alt='NO image uploaded' />
                            {/* src={process.env.PUBLIC_URL +  `{gotCphoto && (<div>{gotCphoto}</div>)}}` */}
                        </div>



                        {/* Cname, Cpassword,Cphone_no,Caca,Cspeci,Cemail_id,Cphoto, */}

                        <div className="pl-md-4 col-md-9">
                            <h6 className="title">{Consultant.c_name}  </h6>
                            <div className="subtitle">
                                <p>{Consultant.c_aca}</p>
                            </div>


                            {/* // startss */}
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>


                            <div> {Consultant.c_speci}  </div>
                            {/* <p>Anxiety, Depression, OCD, Relationship Issues, Couple Counseling, Grief & Loss, Bipolar Disorder, Suicidal Ideation, Psychosis, Sleep Issues, Cognitive Rehabilitation, Trauma, Phobia, Family Therapy, Narcissistic Abuse, LGBTQI, Anger, Self Confidence, ADHD (Adult)</p> */}
                            <button className="btn btn-primary rounded mt-3">  <Link to='/Bookapt' className='text-dark'>Book Appointment</Link> </button>

                            <button className="btn btn-primary rounded mt-3 ml-3 pl-4 pr-4" onClick={openChat4} >Chat</button>

                            {showPopup4 && (
                                <div>
                                    <section >
                                        <div className="container py-5">

                                            <div className="row d-flex justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-6">

                                                    <div className="card" id="chat2">
                                                        <div className="card-header d-flex justify-content-between align-items-center p-3">
                                                            <h5 className="mb-0">Chat</h5>
                                                            <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark" onClick={closeChat4} >Close
                                                            </button>
                                                        </div>
                                                        <div className="card-body" data-mdb-perfect-scrollbar="true">

                                                            <div className="d-flex flex-row justify-content-start">
                                                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
               alt="avatar 1" > </img> */}
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Hello User</p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary" >Welcome to the Chat box
                                                                    </p>
                                                                    <p className="small p-2 me-3 mb-1 text-dark rounded-3 bg-primary"> To ask any queries please contact on <b>{Consultant.c_phone}</b>
                                                                    </p>
                                                                    {/* <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

  </div>
  })}
            </section>
            <Foot />
        </div>
    )
}

export default Consul;