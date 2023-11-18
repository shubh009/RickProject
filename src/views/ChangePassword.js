import { Col, Row } from "reactstrap";
import TopCards from "../components/dashboard/TopCards";
import {
  Table,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";
import axios from "axios";
import { backendUrl } from "../utils/axios";
import { toastMessage } from "../utils/toast";
import { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const ChangePassword = async () => {
    if (password !== repassword) {
      alert("Passwords don't match");
    } else {
      alert("API code...");
      var token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTRiNDYzODNjN2RhOGNlZGZjOWFkMzMiLCJpYXQiOjE3MDAwMzAxNTEsImV4cCI6MTczMTU2NjE1MX0.th47PBLt5ds-1cvn3HavtobSObWo0dmLWIh8Ka3pTGo";
      alert(token);
      const { data } = await axios({
        url: `${backendUrl}/auth/changePassword`,
        method: "put",
        data: {
          newPassword: repassword
        },
        headers: {
          Authorization: `Bearer ${token}`
        },
        withcredentials: true
      });
      console.log(data);
      toastMessage("Password Changed Successfully", "success");
    }
  };

  return (
    <div>
      <Row>
        <Col sm="12" md="12" lg="3" />
        <Col sm="12" md="12" lg="6" className="mt-5">
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              Change Password
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Label for="examplePassword" className="fw-bold">
                  New Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password"
                  type="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="NewPassword" className="fw-bold">
                  Re-Type Password
                </Label>
                <Input
                  id="NewPassword"
                  name="password"
                  placeholder="password"
                  type="Password"
                  value={repassword}
                  onChange={e => setRepassword(e.target.value)}
                />
              </FormGroup>

              <Button
                className="mt-2 bg-success w-100 text-black fs-5 mb-2"
                onClick={ChangePassword}
              >
                {" "}<i className="bi bi-key" /> Change Password
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="12" lg="3" />
      </Row>
    </div>
  );
};

export default ChangePassword;
