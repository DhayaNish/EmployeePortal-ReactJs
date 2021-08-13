import React, { useState } from 'react';
import pexels from '../Images/pexels-lisa-1083822.jpg';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router';
import auth from '../Services/user';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let history=useHistory();
    const loginauth=()=>{
        let data={
            "username":userName,
            "password":password
        }
         auth.login(data)
         .then((res)=>{
        localStorage.setItem("Auth",res.data.token)
          history.push('/Table')
         })
         .catch((err)=>{
          console.log(err)
         })
    }
    return (
        <section>
            <div className="bg-img">
                <div className="login-card">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="login-form">
                                <div className="login-head">
                                    <h1 className="title-head">WELCOME <br></br>TO <br></br>EMPLOYEE <br></br>MANAGEMENT</h1>
                                </div>
                                <div className="form">
                                    <form>
                                        <div class="form-group">
                                            <label for="disabledTextInput">Username</label>
                                            <input type="text" class="form-control" placeholder="Enter User Name" value={userName} onChange={(e)=>setUserName(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <label for="disabledTextInput">Password</label>
                                            <input type="password"  type={password} class="form-control" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                        </div>
                                        {/* <Form.Group size="lg" controlId="email">
                                        <Form.Label>Password<em>*</em></Form.Label>
                                        <Form.Control
                                            autoFocus
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Group> */}
                                        <button type="button" class="btn btn-primary btn-block" onClick={loginauth}>Login</button>
                                    </form>
                                    <div className="forgot-pss">
                                        <span className="forgot-pss-text">Forgot your Password ?</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 bg-logo">
                            <div className="bg-logo-login">

                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="tech-info">
                                <div className="row">
                                    <div className="tech-dev-info">
                                        Technology and Developments around the world
                                    </div>
                                    <div className="tech-dev-info">
                                        <i class="fa fa-envelope mr-2"></i>infoview@gmail.com
                                    </div>
                                    <div className="tech-dev-info">
                                        <i class="fa fa-phone mr-2"></i>(+91) 989358 970
                                    </div>
                                </div>
                            </div>
                            <div className="tech-icon">
                                <div className="tech-logo align-self-end">
                                </div>
                            </div>
                        </div>
                        <div className="view-card">
                            <div className="view-card-head">
                                <div className="row">
                                    <i class="fa fa-circle dot-1 mt-3 ml-4" aria-hidden="true"></i>
                                    <i class="fa fa-circle dot-2 mt-3 ml-1" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="view-card-icons d-flex justify-content-center">
                                <div className="row">
                                    <i class="fa fa-user ml-3 mt-3"></i>
                                    <i class="fa fa-share-alt-square ml-3 "></i>
                                    <i class="fa fa-calendar-o ml-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;