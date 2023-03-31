import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.js';
import Signup from './singup.js';
import Signc from './signc';
import ConEdit from './conEdit.js';

import Blog from './blog.js';
import Aspect from './aspect.js';
import Consul from './consul.js';
import About from './about.js';
import Feedback from './feedback';

import ConFeedback from './conFeedback.js';
import ConConsul from './conConsul.js';

import Bookapt from './bookapt';



import Anxiety from './anxiety.js';
import Adhd from './adhd';
import Ptsd from './ptsd';
import Pmdd from './pmdd';
import Bp from './bp';
import Anger from './anger';
import Ocd from './ocd';
import Dep from './dep';
import Pd from './pd';
import Phobia from './phobia';
import Suicidal from './suicidal';
import Other from './other';



function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} > </Route>
                    <Route path='/Home' element={<Home/>} > </Route>
                    <Route path='/About' element={<About/>} ></Route>

                    <Route path='/Signup' element={<Signup/>} ></Route>
                    <Route path='/Signc' element={<Signc/>} ></Route>
                    <Route path='/ConEdit' element={<ConEdit/>} ></Route>

                    <Route path='/Blog' element={<Blog/>} ></Route>
                    <Route path='/Aspect' element={<Aspect/>} ></Route>
                    <Route path='/Consul' element={<Consul/>} ></Route>
                    <Route path='/Feedback' element={<Feedback/>} ></Route>

                    <Route path='/ConFeedback' element={<ConFeedback/>} ></Route>
                    <Route path='/ConConsul' element={<ConConsul/>} ></Route>




                    <Route path='/Anxiety' element={<Anxiety/>} ></Route>
                    <Route path='/Adhd' element={<Adhd/>} ></Route>
                    <Route path='/Ptsd' element={<Ptsd/>} ></Route>
                    <Route path='/Pmdd' element={<Pmdd/>} ></Route>
                    <Route path='/Bp' element={<Bp/>} ></Route>
                    <Route path='/Anger' element={<Anger/>} ></Route>
                    <Route path='/Ocd' element={<Ocd/>} ></Route>
                    <Route path='/Dep' element={<Dep/>} ></Route>
                    <Route path='/Pd' element={<Pd/>} ></Route>
                    <Route path='/Phobia' element={<Phobia/>} ></Route>
                    <Route path='/Suicidal' element={<Suicidal/>} ></Route>
                    <Route path='/Other' element={<Other/>} ></Route>


                    <Route path='/Bookapt' element={<Bookapt/>} ></Route>



                </Routes>
            </Router>
        </div>
    )
}

export default App;