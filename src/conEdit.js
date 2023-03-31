import React from 'react';
import ConNav from './conNav';
import Foot from './foot';


import { toast,ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useState, useEffect } from 'react';


import { db } from './firebase-config'
import { collection, doc,addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { warning } from '@remix-run/router';

function ConEdit() {

    const [Consultant, setConsultant] = useState([]);
    const ConsultantCollectionRef = collection(db, "Consultant");

    useEffect(() => {
        const getConsultant = async () => {
            const data = await getDocs(ConsultantCollectionRef);
            setConsultant(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getConsultant();
    }, []);

//update code
    const [name, setName] = useState(" Nothing selected")
    const [email, setemail] = useState(" Nothing selected")
    const [pass, setpass] = useState(" Nothing selected")
    const [aca, setaca] = useState(" Nothing selected")
    const [speci, setspeci] = useState(" Nothing selected")
    const [phone, setphone] = useState(" Nothing selected")
    const [photo, setphoto] = useState(" Nothing selected")




    const updateuser = async (id) => {

        const conDoc = doc(db, "Consultant", id);

        const newFields = {c_name: name,c_email:email,c_pass:pass, c_aca: aca,c_speci:speci,c_phone:phone,c_photo:photo};
         await updateDoc(conDoc, newFields);


         console.log("updated")
         alert('DETAILS HAVE BEEN UPDATED')
    }
//___________________________________________________________________________________________



const deleteuser = async (id) => {
    alert("Click on okey is you WNT TO DELETE YOUR PROFILE")
    // <ToastContainer/>
    // toast.success('Success message!', {
    //     position: 'top-right',
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: false,
    //   });


    const conDoc = doc(db, "Consultant", id);
    await deleteDoc(conDoc);
}

    return (
        <div>
            <ConNav />



            <div>


                <section id="contact" className="position-relative section    before-content   bg-light ">
                    <div className="container  ">
                        <h1 className="section-title   tfonts text-center pt-2 pb-3">Consultants Editing Page</h1>
                        <section id="portfolio" className="section      pt-5">
                            
                            <div className="container">


                                {Consultant.map((Consultant, index) => {
                                    return <div key={index}>
                                        <h1 className='text-center '>{index+1}. {Consultant.c_name} :   <button className='bte btn-danger btn-lg' onClick={() => deleteuser(Consultant.id)} >DELETE</button>   </h1><hr />

                               
<table>
    <tr>
        <td>Name : </td>
        <td><input type="text" onChange={(event) => { setName(event.target.value) }} ></input></td>
    </tr>
<br/>
    <tr>
        <td>Email : </td>
        <td> <input type="text" onChange={(event) => { setemail(event.target.value) }} ></input></td>
    </tr>
<br/>
    <tr>
        <td>Password : </td>
        <td> <input type="text" onChange={(event) => { setpass(event.target.value) }} ></input></td>
    </tr>
<br/>
    <tr>
        <td>Academics : </td>
        <td> <input type="text" onChange={(event) => { setaca(event.target.value) }} ></input></td>
    </tr>
<br/>
    <tr>
        <td>Specialization : </td>
        <td> <input type="text" onChange={(event) => { setspeci(event.target.value) }} ></input></td>
    </tr>
<br/>
    <tr>
        <td>Contact Number : </td>
        <td> <input type="text" onChange={(event) => { setphone(event.target.value) }} ></input></td>
    </tr>
<br/>
    <tr>
        <td>Photo : </td>
        <td> <input type="file" onChange={(event) => { setphoto(event.target.value) }}></input></td>  
        <td>
<button className='btn btn-dark btn-lg  mt-4 ml-7' onClick={() => {updateuser(Consultant.id,Consultant.c_photo)}} >Update</button>
            </td> 
    </tr>
</table>



                                        <br /><br /><br/><br/><br/>
                                    </div>

                                })}


                                <div className='text-left'>

                                </div>

                            </div>
                        </section>
                    </div>
                </section>




                <div className='mt-5'>
                    <Foot />
                </div>



            </div>

        </div>
    )
}

export default ConEdit;