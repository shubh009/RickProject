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
import moment from 'moment'

const AddTracking = () =>
{ 
    const sDate = new Date();
    const [date, setdate] = useState("2023-11-27");
    const [city, setcity] = useState("Carbury");
    const [ tabData, setTabData ] = useState( [ "" ] );
    
  
  useEffect(() => {
    getTableData();
  }, [] );
  
  const getTableData = async () => {
    try
    {
      
      var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTRiNDYzODNjN2RhOGNlZGZjOWFkMzMiLCJpYXQiOjE3MDAyMzc5NzgsImV4cCI6MTczMTc3Mzk3OH0.rp_einW2jh2UV7EQEeCLOutbTG7ysVGZymA4Brl5R2g";
      
      let { data } = await axios({
        method: "get",
        url: `${backendUrl}/dashboard/getTracking`,
        data: {
          date: date,
          city: city
        },
        headers: {
          Authorization: `Bearer ${token}`
        },
      withcredentials: true
      } );
      console.log(data);
      setTabData(data?.tracking);
      
    } catch (error) {
      console.log(error);
      
    }
  };
  
  
  const submitThis = async () =>
  { 
    alert( date + city );
    try
    { 
      var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTRiNDYzODNjN2RhOGNlZGZjOWFkMzMiLCJpYXQiOjE3MDAyMzc5NzgsImV4cCI6MTczMTc3Mzk3OH0.rp_einW2jh2UV7EQEeCLOutbTG7ysVGZymA4Brl5R2g";
      let { data } = await axios({
        method: "post",
        url: `${backendUrl}/dashboard/createTracking`,
        data: {
          date: date,
          city: city
        },
        headers: {
          Authorization: `Bearer ${token}`
        },
      withcredentials: true
      } );
      console.log( data );
      getTableData();
      alert( data.message );
    }
    catch {
      
    }
  }
  
    
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
                              {moment(tdata.date).format('LL')}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}{tdata.city}
                      </td>
                      <td>
                        1
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
                  onChange={ e => setdate( e.target.value ) }
                  type="date"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail" className="fw-bold">
                  City
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="City"
                  type="city"
                  value={city}
                  onChange={e => setcity(e.target.value)}
                />
              </FormGroup>
              
              
              <button onClick={submitThis}
                className="mt-2 bg-success w-100 text-black fs-5 btn"
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