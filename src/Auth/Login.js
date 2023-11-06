import { Col, Row } from "reactstrap";
import {
  Card
} from "reactstrap";
import "../assets/scss/custom.css";
const Login = () =>
{
    return (
        <>
           <Row className="LoginPan ">
             <Col sm="12" md="12" lg="4" ></Col>
             <Col sm="12" md="12" lg="4">
                 <Card className="shadow">
            <div className="profile w-100 border-bottom">
              <div>
                <h4 className="fw-bolder ">Login Panel</h4>
                <label className="fs-6 text-danger">Please enter your login email & password</label>
              </div>
            </div>
           
            <div className="profile">
              <div className="form-group mb-4">
                <label className="fw-bold">Email Id</label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="form-group">
                <label className="fw-bold">Password</label>
                <input type="text" className="form-control"></input>
              </div>
              
            </div>

            <hr />
            <div className="subprofile text-center">
              <div className="flex w-100 mb-2">
                <button className="btn btn-success text-black fw-bold">Login Now</button>
                <button className="btn btn-danger m-2 fw-bold">Forgot Password</button>
              </div>
            </div>
          </Card>
             </Col>
             
           </Row>
        </>
    )
}
 
export default Login;