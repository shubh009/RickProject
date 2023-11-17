import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import {
  Table,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import axios from "axios";
import { backendUrl } from "../utils/axios";
import { toastMessage } from "../utils/toast";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const tableData = [
    { name: "Shubhanshu", email: "Shubh@gmail.com", acesstype: "emp" },
    { name: "Anshu", email: "anshu@gmail.com", acesstype: "emp" },
    { name: "Sajid", email: "sajid@gmail.com", acesstype: "emp" }
  ];

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [ userType, setUserType ] = useState( "" );
  const [tabData, setTabData] = useState([""]);

  const submitThis = async () => {
    alert(name + email + password + userType);
    // console.log( name + email + password + userType );

    try {
      let { data } = await axios({
        method: "post",
        url: `${backendUrl}/auth/signup/`,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: name,
          email: email,
          password: password,
          role: userType
        }
      });
      console.log(data);
      //console.log(JSON.stringify(data.message));
    } catch (error) {
      console.error("Error during API call:", error);
      // Handle the error, show a user-friendly message, etc.
    }
  };



  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    try {
      
      const { data } = await axios.get(
        `${backendUrl}/auth/getAllUsers`
      );
      console.log(data);
      setTabData(data?.users);
      
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div>
      {/***Table ***/}

      <Row>
        <Col sm="12" md="12" lg="7">
          <Card>
            <CardBody>
              <CardTitle tag="h4">Manage Users</CardTitle>
              <Table className="no-wrap mt-3 align-middle" responsive bordered>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>AcessType</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {tabData.map((tdata, index) =>
                    <tr key={index} className="border-top">
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <div>
                            <h6 className="mb-0">
                              {tdata.name}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}{tdata.email}
                      </td>
                      <td>
                        {tdata.role}
                      </td>
                      <td className="text-center">
                        <i className="bi bi-trash text-danger" />
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="12" lg="5">
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              Add New User
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Label for="examplename" className="fw-bold">
                  Name
                </Label>
                <Input
                  id="examplename"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail" className="fw-bold">
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="email"
                  type="email"
                  value={email}
                  onChange={e => setemail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword" className="fw-bold">
                  Password
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
                <Label for="exampleSelect" className="fw-bold">
                  Select User Type
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={userType}
                  onChange={e => setUserType(e.target.value)}
                >
                  <option>Admin Type</option>
                  <option>Employee</option>
                  <option>Admin</option>
                </Input>
              </FormGroup>

              <button
                className="mt-2 bg-success w-100 text-black fs-5"
                onClick={submitThis}
              >
                <i className="bi bi-plus-circle" /> Add New User
              </button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ManageUsers;
