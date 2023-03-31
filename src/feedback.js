import React from 'react';
import Foot from './foot';
import Navibar from './navibar';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { db } from './firebase-config'
import { collection, addDoc, getDocs } from "firebase/firestore";
import './App.css';

function Feedback() {

  // LOCALSTORAGE 

  // const [myarray, setMyArray] = useState([]);
  // const [mytext, setMyText] = useState(" ");
  // _________________________REACT & FIREBASE________________________________________

  // REACT TO FIREBASE

  const [Feedback, setFeedback] = useState([]);
  const FeedbackCollectionRef = collection(db, "Feedback")

  const [newConsul, setNewConsul] = useState(" Nothing selected")
  const [newFeedback, setNewFeedback] = useState(" Nothing entered")


  // useEffect(() => {

  //   const getFeedback = async () => {
  //     const data = await getDocs(FeedbackCollectionRef);
  //     console.log(data);
  //     setFeedback(data.doc.map((doc) => ({...doc.data(), id: doc.id})));
  //   };
  //   getFeedback()
  // }, [])

  useEffect(() => {
    const getFeedback = async () => {
      const data = await getDocs(FeedbackCollectionRef);
      setFeedback(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFeedback();
  }, []);

  









  // ON SUBMIT DO 

  const onSubmitDo = async (event) => {

    alert('Thankyou! your Feedback has been successfully stored <3')
    event.preventDefault();

    await addDoc(FeedbackCollectionRef, { consultant: newConsul, feedback: newFeedback });






    // _________FIREBASE CODE ENDS HERE______________

    // localStorage.setItem("feedback", state.feedback);
    // localStorage.setItem("consultant", state.consultant);



    // _____________fire base thing completes here _______________________

    // PUSHING DATA FOR MYARRAY TO SHOW LOCAL STORAGE FEEDBACK 
    // let list = [...myarray];
    // list.push(mytext);
    // setMyArray(list);
    // setMyText("");

  };

  // ______________ON-SUBMIT ENDS HERE _______________________

  // STATE FOR LOCALSTORAGE

  // const [state, setState] = useState({
  //   feedback: '',
  //   consultant: "",
  // });

  // ____ON CHANGE DO_____________________

  // const onChangeDo = (event) => {
  //   setState({

  //     mytext: event.target.value
  //   });
  // }



  // const storedFeedback = localStorage.getItem('feedback');
  // const storedConsultant = localStorage.getItem('consultant');

  return (
    <div>
      <Navibar />

      <section id="contact" className="position-relative section    before-content    ">
        <div className="container text-center  ">
          <h1 className="section-title   tfonts ">Feedbacks</h1>

          <section id="portfolio" className="section    pt-5">
            <div className="container text-center">


              <form onSubmit={onSubmitDo} className="text-left">
                <p className='text-dark    '><b>*</b>Please choose a colsultant before giving a Feedback</p>

                <div className="form-group   border border-secondary ">
                  <select name='consultant' onChange={(event) => { setNewConsul(event.target.value) }} className="form-control           " id="exampleFormControlSelect1">
                    <option>Select Consultant</option>
                    <option>Dr. Arwa Vohra</option>
                    <option>Dr. Heena</option>
                    <option>Dr. Afifa</option>
                    <option>James Smith</option>
                    <option>Darren Watson</option>
                  </select>
                </div>


                <textarea className='border border-secondary      w-100 pt-5 pb-5 pl-5 pr-5              shadow-lg p-3 mb-5 bg-white rounded' name='feedback' onChange={(event) => { setNewFeedback(event.target.value) }} placeholder='Please enter your feedback here' />
                {/* //onChange={onChangeDo} */}

                <button type="submit" className="btn btn-primary btn-block rounded w-lg mt-5   size">Submit</button>
              </form>


              <h1 className='text-center pt-5'>Your Feedbacks:</h1><hr />

<div className='text-left'>
  
{Feedback.map((Feedback, index) => { 
  return <div key={index} >
    <b className='display-6'>{index+1} </b>
   | <b> Consultant  :</b>  {Feedback.consultant} <br/>
   &nbsp; &nbsp;|<b>    Feedback  :</b>   {Feedback.feedback}
    <hr/>

  </div>
  })}
</div>





              {/* {storedFeedback && storedConsultant && (
                <div className='mt-5 text-left'>
                  <div>
                    <p> <b>Consultant </b> : {storedConsultant}  </p>

                    <p><b>Feedback </b>: {storedFeedback}</p>
                    <hr className='bg-secondary'></hr>
                  </div>
                </div>
              )} */}

              {/* <div className='text-left'>
                {myarray.map((value, index) => (
                  <p key={index}>
                    <b className='text-smalls'> {index + 1}. </b> {value.storedConsultant} {value} &nbsp;&nbsp;&nbsp;
                  </p>
                ))}
              </div> */}






            </div>
          </section>
        </div>
      </section>
      <Foot />
    </div>
  );
}

export default Feedback;
