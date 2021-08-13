import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { useHistory } from 'react-router';

const Profile = () => {

    const [firstname, setFirstName] = useState("")
    let history=useHistory();

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
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12 col-lg-2 side-bar">
                        <p className="side">ENROLLMENT</p>
                        <p className="side">DETAILS</p>
                        <p className="side">ATTENDANCE</p>
                        <p className="side">SALARY</p>
                    </div>
                    <div className="col-12 col-lg-3 side-bar1">
                        <p>Enter The Details Below</p>
                        <div className="card crd">
                            <TextField
                                style={{ padding: "4px 0px 4px 0px" }}
                                value={firstname}
                                label="First Name"
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                            <div className="gen">
                                <select class="custom-select  mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                            </div>
                            <div className="gen">
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" label="First name">
                                    <option selected >Citizenship</option>
                                    <option value="1">USA</option>
                                    <option value="2">INDIA</option>
                                </select>
                            </div>
                            <button type="button" class="btn btn-dark btn-c">Contact Details</button>
                            <div className="card gen" >
                                <TextField
                                    value={firstname}
                                    label="Phone Number"
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                />
                            </div>
                            <button type="button" class="btn btn-dark btn-c">Emergency Contact</button>
                            <div className="card gen" >
                                <TextField
                                    value={firstname}
                                    label="Name"
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                />
                            </div>
                            <button type="button" class="btn btn-primary btn-c">Upload</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 side-bar2">
                        <div className="card crd ">
                            <TextField value={firstname}
                                label="Middle Name"
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                            <div className="gen">
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" label="First name">
                                    <option selected >Citizenship</option>
                                    <option value="1">USA</option>
                                    <option value="2">INDIA</option>
                                </select>
                            </div>
                            <div className="gen">
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" label="First name">
                                    <option selected >Language</option>
                                    <option value="1">English</option>
                                    <option value="2">Tamil</option>
                                </select>
                            </div>
                            <div className="gen">
                            </div>
                            <div className="card ph" >
                                <TextField
                                    value={firstname}
                                    label="E-mail"
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="card ph-1" >
                                <TextField
                                    value={firstname}
                                    label="Phone Number"
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="card btm-crd">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                    <label class="custom-control-label" for="customCheck1">I Agree To The Terms And Condition</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                    <label class="custom-control-label" for="customCheck2">All The Details Are Correct And Given By Me</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 ">
                        <div className="card sb-3" >
                            <TextField
                                value={firstname}
                                label="Last Name"
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="card sb-3" >
                            <TextField
                                value={firstname}
                                label="SSN"
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="card sb-3" >
                            <TextField
                                value={firstname}
                                label="Martial Status"
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                        </div>
                        <form className="rs-add">
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Residantial Address</label>
                                <textarea class="form-control box" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>
                        <div className="card rr" >
                            <TextField
                                value={firstname}
                                label="Relationship Status"
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />

                        </div>
                        <button type="button" class="btn btn-primary" onClick={()=>history.push('./Table')}>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
