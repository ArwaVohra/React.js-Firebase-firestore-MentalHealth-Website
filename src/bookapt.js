import React from 'react';
import Foot from './foot';

// import gotCname from './consul';

import Navibar from './navibar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
// import { firestore } from './firebase.js';
// import { addDoc, collection } from "@firebase/firestore" delete this
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase-config'




function Chat() {

// LOCAL GETTING Cname FOR DROPDOWN


// const gotCname = localStorage.getItem('Cname');

// __________________________________________
//--------- react - firestore 

const [Bookapt, setBookapt] = useState([]);
const BookaptCollectionRef = collection(db, "Bookapt")

const [newBemail, setNewBemail] = useState(" Nothing entered")
const [newBconsul, setNewBconsul] = useState(" Nothing entered")
const [newdate, setNewdate] = useState(" Nothing selected")







  const onSubmitDo = async(event) => {
    event.preventDefault();






    // localStorage.setItem("Bemail_id", state.Bemail_id);
    // localStorage.setItem("date", state.date);
    // localStorage.setItem("consultant", state.consultant)
    
    alert('apt booked!!!');

    await addDoc(BookaptCollectionRef, { Bemail_id: newBemail, bconsul: newBconsul, date : newdate });

    
  }






  // const [state, setState] = useState({

  //   Bemail_id: '',
  //   date: '',
  //   consultant: '',
  // });
  // const onChangeDo = (event) => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.value
  //   });
  // }
 
  return (
    <div>
      <Navibar />


      <section id="contact" className="position-relative section      before-content md-0 pb-0">
        <div className="container text-center">
          <h6 className=" text-primary section-title mb-4    tfonts">Appointment Booking Form</h6>


          <div className="contact text-left">
            <div className="form">
              <h6 className="subtitle">Available 24/7</h6>
              <h6 className="section-title mb-4">Get In Touch</h6>
              <form onSubmit={onSubmitDo}>

{/* EMAIL */}
                <div className="form-group">
                  <input type="email" onChange={(event) => { setNewBemail(event.target.value) }}   name="Bemail_id"  className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Email id"></input>
                </div>

{/* DATE  */}
                <p className='pt-3'>Enter the date of Appointment</p>
               
                <div className="form-group">
                  <input type="date" min="2023-03-03"  name="date" onChange={(event) => { setNewdate(event.target.value) }}    className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Email id"></input>
                </div>


{/* CONSULTANT  */}

                <div className="form-group">
                  <select name='consultant' onChange={(event) => { setNewBconsul(event.target.value) }}    className="form-control" id="exampleFormControlSelect1">
                    <option>Select Consultant</option>
                    <option>Dr. Arwa Vohra</option>
                    <option>Dr. Heena</option>
                    <option>Dr. Afifa</option>
                    <option>James Smith</option>
                    <option>Darren Watson</option>
                    {/* <option>{gotCname &&(<p>{gotCname}</p>)}</option> */}

                  </select>
                </div>


                <button type="submit" className="btn btn-primary btn-block rounded w-lg">Submit</button>
              </form>
            </div>

          </div>
        </div>

      </section>


      <Foot />
    </div>
  )
}

export default Chat; 
