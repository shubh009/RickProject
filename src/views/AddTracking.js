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

const AddTracking = () =>
{ 
    const [date, setdate] = useState("");
    const [city, setcity] = useState("");
    const [move, setMove] = useState("");
    //const [ tabData, setTabData ] = useState( [ "" ] );
     const tabData = [
         {
              Date: "26 Oct",
              City: "Abc",
              Move: "1",
         },
         {
              Date: "28 Nov",
              City: "Abc",
              Move: "0",
         },
         {
              Date: "11 Dec",
              City: "Abc",
              Move: "1",
         },
         {
              Date: "22 Oct",
              City: "Abc",
              Move: "0",
         },
        ]
    return (
        <>
             <Row>
        <Col sm="12" md="12" lg="7">
          <Card>
            <CardBody>
              <CardTitle tag="h4">Manage Users</CardTitle>
              <Table className="no-wrap mt-3 align-middle" responsive bordered>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>City</th>
                    <th>Snow Move</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {tabData.map((tdata, index) =>
                    <tr key={index} className="border-top">
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <div>
                            <h6 className="mb-0">
                              {tdata.Date}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}{tdata.City}
                      </td>
                      <td>
                        {tdata.Move}
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
              Add New Tracker
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Label for="examplename" className="fw-bold">
                  Date
                </Label>
                <Input
                  id="examplename"
                  name="name"
                  placeholder="Name"
                  value={date}
                  onChange={e => setdate(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail" className="fw-bold">
                  City
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="email"
                  type="city"
                  value={city}
                  onChange={e => setcity(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword" className="fw-bold">
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  value={move}
                  onChange={e => setMove(e.target.value)}
                />
              </FormGroup>
              
              <button
                className="mt-2 bg-success w-100 text-black fs-5"
              >
                <i className="bi bi-plus-circle" /> Add New Tracking
              </button>
            </CardBody>
          </Card>
        </Col>
      </Row>
        </>
    )
}
export default AddTracking