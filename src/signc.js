import React from 'react';
import Navibar from './navibar';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useRef } from 'react';
// import { firestore } from './firebase.js';



import { db } from './firebase-config'
import { collection, addDoc } from "firebase/firestore";
import './App.css';
import Foot from './foot';

function Signup() {

    
    const [Consultant, setConsultant] = useState([]);
    const ConsultantCollectionRef = collection(db, "Consultant")
  
    const [newName, setNewName] = useState(" Nothing selected")
    const [newPass, setNewPass] = useState(" Nothing entered")
    const [newPhone, setNewPhone] = useState(" Nothing entered")
    const [newEmail, setNewEmail] = useState(" Nothing entered")
    const [newAca, setNewAca] = useState(" Nothing entered")
    const [newSpeci, setNewSpeci] = useState(" Nothing entered")
    const [newPhoto, setNewPhoto] = useState(" Nothing entered")








    const onSubmitDo = async (event) => {
        event.preventDefault();


        alert('Form submitted successfully!');




        console.log('CONSULTANT done')
        await addDoc(ConsultantCollectionRef, { c_name: newName, c_pass: newPass, c_email: newEmail, c_phone : newPhone, c_aca:newAca, c_speci:newSpeci, c_photo: newPhoto });




        // localStorage.setItem('Cname', state.Cname);
        // localStorage.setItem('Caca', state.Caca);
        // localStorage.setItem('Cemail_id', state.Cemail_id);
        // localStorage.setItem('Cphone_no', state.Cphone_no);
        // localStorage.setItem('Cpassword', state.Cpassword);
        // localStorage.setItem('Cspeci', state.Cspeci);

    }




    // const [state, setState] = useState({
    //     Cname: '',
    //     Cpassword: '',
    //     Caca: '',
    //     Cphone_no: '',
    //     Cemail_id: '',
    //     Cphoto : "",
    //     Cspeci: "",
    // });

    // const onChangeDo = (event) => {
    //     setState({
    //         ...state,
    //         [event.target.name]: event.target.value
    //     });
    // }


    return (
        <div>
            <Navibar />
            {/* <hr/> */}
            <section id="contact" className="position-relative section      before-content">
                <div className="container text-center">
                    {/* <h6 className="subtitle">Contact</h6> */}
                    <h6 className=" text-primary section-title mb-4   tfonts">Consultant's Signup page</h6>
                    <p className="   mb-5 pb-4">If you are User willing to get a unique id then please <u><Link to='/Signup' >click here</Link></u> to Sign up as a User.</p>



                    <div className="contact text-left mt-0">
                        <div className="form">
                            <h6 className="subtitle">Available 24/7</h6>
                            <h6 className="section-title mb-4">Get In Touch</h6>



                            <form onSubmit={onSubmitDo}  >
                                {/*   NAME INPUT    */}
                                <div className="form-group">
                                    <input type="name" onChange={(event) => { setNewName(event.target.value) }}  name="Cname" className="form-control " id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name"></input>
                                </div>

                                {/* PASSWORD  */}
                                <div className="form-group">
                                    <input type="password" onChange={(event) => { setNewPass(event.target.value) }} name="Cpassword"  className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>

                                {/* phone_no */}
                                <div className="form-group">
                                    <input type="number" onChange={(event) => { setNewPhone(event.target.value) }} name="Cphone_no"   className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter MobleNo."></input>
                                </div>


                                {/* email */}
                                <div className="form-group">
                                    <input type="email" onChange={(event) => { setNewEmail(event.target.value) }} name="Cemail_id"   className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Email id"></input>
                                </div>


                                {/* ACA */}
                                <div className="form-group">
                                    <input type="text" onChange={(event) => { setNewAca(event.target.value) }} name="Caca" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Your Academics"></input>
                                </div>


                                {/* SPECIALIZATION */}
                                <div className="form-group">
                                    <textarea type="text" onChange={(event) => { setNewSpeci(event.target.value) }} name="Cspeci"  className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your Specialization"></textarea>
                                </div>


                                {/* PHOTO */}
                                <p className='mt-3 pt-3'>Please upload your a passport size photo</p>
                                <div className="form-group">
                                    <input type="file" onChange={(event) => { setNewPhoto(event.target.value) }}  name="Cphoto" className="form-control" id="exampleFormControlInput1" placeholder="Date"></input>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block rounded w-lg"  >Submit</button>
                                <p className="   mt-2 text-center "> <u><Link to='/ConEdit' >click here and get directed to the editing page</Link>  </u></p>

                            </form>
                        </div>

                    </div>
                </div>



            </section>

        </div>
    )
}

export default Signup;