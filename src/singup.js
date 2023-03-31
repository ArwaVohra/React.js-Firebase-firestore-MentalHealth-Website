import React from 'react';
import Navibar from './navibar';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useRef } from 'react';



import { db } from './firebase-config'
import { collection, addDoc } from "firebase/firestore";
import './App.css';

function Signup() {


    const [User, setUser] = useState([]);
    const UserCollectionRef = collection(db, "User")

    const [newName, setNewName] = useState(" Nothing selected")
    const [newEmail, setNewEmail] = useState(" Nothing entered")
    const [newPass, setNewPass] = useState(" Nothing entered")
    const [newPhone, setNewPhone] = useState(" Nothing entered")
    const [newAge, setNewAge] = useState(" Nothing entered")







    const onSubmitDo = async (event) => {
        event.preventDefault();
        alert('Signed in Successfully!!!')


        await addDoc(UserCollectionRef, { u_name: newName, u_email: newEmail, u_pass: newPass, u_phone: newPhone, u_age: newAge });







        // localStorage.setItem('name', state.name);
        // localStorage.setItem('age', state.age);
        // localStorage.setItem('email_id', state.email_id);
        // localStorage.setItem('phone_no', state.phone_no);
        // localStorage.setItem('password', state.password);
        // alert('Form submitted successfully!');
        console.log("your details has been submitted")
    }




    // const [state, setState] = useState({
    //     name: '',
    //     password: '',
    //     age: '',
    //     phone_no: '',
    //     email_id: '',
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
                    <h6 className=" text-primary section-title mb-4    tfonts">User's Signup page</h6>
                    <p className="   mb-5 pb-4">If you are a Consultant willing to get a unique id then please <u><Link to='/Signc' >click here</Link></u> to Sign up as a Consultant.</p>


                    <div className="contact text-left">
                        <div className="form">
                            <h6 className="subtitle">Available 24/7</h6>
                            <h6 className="section-title mb-4">Get In Touch</h6>
                            {/* <h6 className="subtitle">User Form</h6> */}

                            
                            <form onSubmit={onSubmitDo}>
                                {/*   NAME INPUT    */}
                                <div className="form-group">
                                    <input type="name" name="name" onChange={(event) => { setNewName(event.target.value) }} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name"></input>
                                </div>

                                {/* PASSWORD  */}
                                <div className="form-group">
                                    <input type="password" name="password" onChange={(event) => { setNewPass(event.target.value) }} className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>

                                {/* phone_no */}
                                <div className="form-group">
                                    <input type="number" name="phone_no" onChange={(event) => { setNewPhone(event.target.value) }} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter MobleNo."></input>
                                </div>


                                {/* email */}
                                <div className="form-group">
                                    <input type="email" name="email_id" onChange={(event) => { setNewEmail(event.target.value) }} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Email id"></input>
                                </div>



                                {/* AGE */}
                                <p className='mt-3 pt-3'>Enter your Age</p>
                                <div className="form-group">
                                    <input type="date" name="age" onChange={(event) => { setNewAge(event.target.value) }} className="form-control" id="exampleFormControlInput1" placeholder="Date"></input>
                                </div>


                                <button type="submit" className="btn btn-primary btn-block rounded w-lg"  >Submit</button>





                            </form>
                        </div>

                    </div>
                </div>



            </section>

        </div>
    )
}

export default Signup;