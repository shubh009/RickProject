import { Col, Row } from "reactstrap";
import { Card } from "reactstrap";
import "../assets/scss/custom.css";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../utils/axios";
import { toastMessage } from "../utils/toast";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate();
  const [email,setEmail]=useState(""); 
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 
  const submitThis = async () =>
  {

    console.log(email, passw);
    if ( email && passw )
    {
      let {data}=await axios({
        method: 'post',
        responseType: 'json',
        url: `${backendUrl}/auth/login`,
        data: {
            email: email,
            password: passw
            },
            
      } )
      console.log( data );
      console.log(  JSON.stringify(data.token));
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem( "user", JSON.stringify( data.user ) );
      toastMessage( "Login Successfully", "success" );
      navigate("/starter");
      //alert( "Submitted Successfully" );
    }
    else
    {
      alert( "Both Fields Are Required" );
    }
	}


  return (
    <>
      <Row className="LoginPan ">
        <Col sm="12" md="12" lg="4"></Col>
        <Col sm="12" md="12" lg="4">
          <Card className="shadow">
            <div className="profile w-100 border-bottom">
              <div>
                <h4 className="fw-bolder ">Login Panel</h4>
                <label className="fs-6 text-danger">
                  Please enter your login email & password
                </label>
              </div>
            </div>

            <div className="profile">
              <div className="form-group mb-4">
                <label className="fw-bold">Email Id</label>
                <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
              </div>
              <div className="form-group">
                <label className="fw-bold">Password</label>
                <input className="form-control" value={passw} onChange={(e)=>setPassw(e.target.value)} type="password"></input>
              </div>
            </div>
            <hr />
            <div className="subprofile text-center">
              <div className="flex w-100 mb-2">
                <button className="btn btn-success text-black fw-bold" onClick={submitThis}>
                  Login Now
                </button>
                <button className="btn btn-danger m-2 fw-bold">
                  Forgot Password
                </button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Login;
