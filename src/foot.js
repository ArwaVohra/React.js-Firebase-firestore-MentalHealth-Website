import React from 'react';
import {Link} from 'react-router-dom';


function Foot(){
    return(
        <div>
              <section className="bg-gray p-0 section  ">
                <div className="container">
                    <div className="card bg-primary">
                        <div className="card-body text-light">
                            <div className="row align-items-center">
                                <div className="col-sm-9 text-center text-sm-left">
                                    <h5 className="mt-3 text-dark ">Still not registered???</h5>
                                    <p className="mb-3  text-dark">Get registered on our site and get access to all the features.</p>
                                </div>
                                <div className="col-sm-3 text-center text-sm-right">
                                    <Link to='/Signup' className="btn btn-light rounded">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


                <footer className=" page-footer  ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-6">
                    <p>Copyright 2023 &copy; <Link to='/Home' > Always Theere For You</Link></p>
                </div>
                <div className="col-sm-6">
                    {/* <div className="socials">
                        <a className="social-item" href="#"><i className="ti-facebook"></i></a>
                        <a className="social-item" href="#"><i className="ti-google"></i></a>
                        <a className="social-item" href="#"><i className="ti-github"></i></a>
                        <a className="social-item" href="#"><i className="ti-twitter"></i></a>
                    </div> */}
                </div>
            </div>
        </div>
    </footer> 
        </div>
    )
}

export default Foot;