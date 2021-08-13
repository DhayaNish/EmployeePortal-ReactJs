import React from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import pexels from '../Images/pexels-lisa-1083822.jpg';

const Perfomance = () => {
    const [activetab, setActivetab] = useState("1")

    const handleSelect = (eventKey) => setActivetab(eventKey);

    return (
        <section>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <span><i class="fa fa-male"></i><i class="fa fa-male"></i><b className="ml-1"> HireMan</b></span>
                </div>
                <form class="form-inline my-2 my-lg-0 d-flex justify-content-end">
                    <i class="fa fa-search " ></i>
                    <i class="fa fa-bell ml-3"></i>
                    <i class="fa fa-user ml-3" ></i>
                </form>
            </nav>
            <div className="line-sep">
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-2 side-bar">
                        <p className="side">ENROLLMENT</p>
                        <p className="side">DETAILS</p>
                        <p className="side">ATTENDANCE</p>
                        <p className="side">SALARY</p>
                    </div>
                    <div className="col-12 col-lg-10 per">
                       <Nav variant="tabs" activeKey={activetab} onSelect={handleSelect}>
                            <Nav.Item >
                                <Nav.Link style={{ borderBottomWidth: activetab == 1 ? 2 : 0, borderBottomColor: activetab == 1 ? "blue" : null, paddingLeft: 30, paddingRight: 30 }} eventKey={1}>Task List</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link style={{ borderBottomWidth: activetab == 2 ? 2 : 0, borderBottomColor: activetab == 2 ? "blue" : null, paddingLeft: 30, paddingRight: 30 }} eventKey={2}>Perfomance</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <div>
                            {activetab==1&&
                            <div class="card-group ">
                                <div class="card pf-crd mt-4">
                                    <img class="card-img-top crd-img" src={pexels} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Praveen</h5>
                                        <p class="card-text">Android Developer</p>
                                        <p class="card-text"><small class="text-muted">Full Time</small></p>
                                    </div>
                                </div>
                                <div class="card pf-crd mt-4">
                                    <img class="card-img-top crd-img" src={pexels} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div class="card pf-crd mt-4">
                                    <img class="card-img-top crd-img" src={pexels} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div class="card pf-crd mt-4">
                                    <img class="card-img-top crd-img" src={pexels} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div class="card pf-crd mt-4">
                                    <img class="card-img-top crd-img" src={pexels} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Perfomance;