import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './App.css';
function ConNav() {
    return (
        <React.Fragment>
            <div>

                <nav className="navbar navbar-expand-lg navbar-light fixed-top     shadow-lg p-3 mb-5 bg-white rounded" data-spy="affix" data-offset-top="0">
                    <div className="container">
                        {/* <a className="navbar-brand" href="#"> */}


                        <Link className="navbar-brand" to="/Home" ><img src={process.env.PUBLIC_URL + "/imgs/logo.svg"} /></Link>



                        {/* </a> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto align-items-center">
                                <li className="nav-item">

                                    <Link to='/Home' className="nav-link" >Home</Link>
                                </li>
                                {/* <li className="nav-item">
                                <Link to='/About' className="nav-link" >About us</Link>

                                </li> */}
                                {/* <li className="nav-item">
                                    <Link to='/Blog' className="nav-link" >Blogs</Link>
                                </li> */}



                                <li className="nav-item">
                                    <Link to='/ConConsul' className="nav-link" >Consultants</Link>

                                </li>

                                <li className="nav-item">
                                    <Link to='/ConFeedback' className="nav-link" >Feedbacks</Link>

                                </li>


                                <li className="nav-item">
                                    <Link to='/ConEdit' className="nav-link" >Editing Page</Link>

                                </li>


                                {/* <li className="nav-item">
                                    <Link to='/Signup' className="- btn btn-primary rounded ml-4">Sign up</Link>
                                </li> */}






                                <li className="nav-item" >
                                    <div className='dropdowns' >
                                        <button className="btn btn-primary rounded ml-4  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Sign in
                                        </button>
                                        <div className="dropdown-menu form">
                                            <form className="px-4 py-3">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"></input>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"></input>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input type="checkbox" className="form-check-input" id="dropdownCheck"></input>
                                                    <label className="form-check-label" htmlFor="dropdownCheck">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                                <Link to='/Home' className="dropdown-item   text-center  mt-3">Log- out</Link>

                                            </form>
                                            <div className="dropdown-divider mt-0"></div>
                                            <Link to='/Signup' className="dropdown-item">New around here? Sign up</Link>
                                            {/* <a className="dropdown-item" href="#"><small>LOG OUT</small></a> */}

                                        </div>
                                    </div>
                                </li>






                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </React.Fragment>
    )
}

export default ConNav;