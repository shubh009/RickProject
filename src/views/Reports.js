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
  Button,
} from "reactstrap";
import Loading from "react-fullscreen-loading";
import { useState, useEffect } from "react";
import moment from "moment";

import { callAxios } from "../utils/axios";
import toast from "react-hot-toast";
import { CSVLink } from "react-csv";

const ManageUsers = () => {
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reportsData, setReportsData] = useState([]);
  const [dates, setDates] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);

  console.log(startDate, endDate);

  const tableData = [
    { name: "Shubhanshu", email: "Shubh@gmail.com", acesstype: "emp" },
    { name: "Anshu", email: "anshu@gmail.com", acesstype: "emp" },
    { name: "Sajid", email: "sajid@gmail.com", acesstype: "emp" },
  ];

  const handleSearch = async () => {
    try {
      setLoading(true);
      const { data } = await callAxios(
        "get",
        `dashboard/getReport?startDate=${moment(new Date(startDate)).format(
          "YYYY-MM-DD"
        )}&endDate=${moment(new Date(endDate)).format("YYYY-MM-DD")}`
      );
      console.log(data);
      setLoading(false);
      setReportsData(data.result);
      setDates(data.result[0].dates.map((d) => moment(d).format("DD MMM")));

      const headers1 = [];
      headers1.push({ label: "Location", key: "city" });
      headers1.push({ label: "Total Push", key: "totalEmails" });
      data.result[0].dates.map((d) =>
        headers1.push({ label: moment(d).format("DD MMM"), key:moment(d).format("DD MMM")  })
      );
      console.log(headers1);
      setHeaders(headers1);

      const csvData1 = [];
      data.result.map((d) => {
        const obj = {};
        obj.city = d.city;
        obj.totalEmails = d.totalEmails;
        d.dates.map((d1) => {
          obj[moment(d1).format("DD MMM")] = d1.totalEmails;
        });
        csvData1.push(obj);
      });
      console.log(csvData1);
      setCsvData(csvData1);

      toast.success("Report Generated Successfully");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  console.log(dates);

  return (
    <>
      <Loading loading={loading} background="#fff" loaderColor="#0bb7af" />
      <div>
        <Row>
          <Col>
            <Card>
              <CardTitle tag="h6" className="border-bottom p-4 mb-0">
                <Row>
                  <Col lg="6" className="mt-3">
                    <h4 className="mt-1">
                      {" "}
                      <i className="bi bi-bell me-2"> </i> Tracking Reports
                    </h4>
                  </Col>
                  <Col lg="6" className="">
                    <FormGroup>
                      <Label for="exampleEmail">
                        <Label for="exampleEmail">Start Date</Label>
                        <Input
                          id="exampleEmail"
                          name="sdate"
                          placeholder="Start Date"
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                      </Label>

                      <Label for="exampleEmail" className="m-2">
                        <Label for="exampleEmail text-capital">end Date</Label>
                        <Input
                          id="exampleEmail"
                          name="sdate"
                          placeholder="Start Date"
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </Label>

                      <button className="btn-danger btn" onClick={handleSearch}>
                        {" "}
                        View Report
                      </button>
                    </FormGroup>
                  </Col>
                </Row>
              </CardTitle>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="p-3">
              <CardBody>
                <Row>
                  <Col lg="5"></Col>
                  <Col lg="7">
                    <button className="btn-outline-dark btn mx-2 ms-5">
                      {" "}
                      Week1
                    </button>
                    <button className="btn-outline-dark btn mx-2">
                      {" "}
                      Week2
                    </button>
                    <button className="btn-outline-dark btn mx-2">
                      {" "}
                      Week3
                    </button>
                    <button className="btn-outline-dark btn mx-2">
                      {" "}
                      Week4
                    </button>
            
                      {" "}
                      <CSVLink
                        data={csvData}
                        headers={headers}
                        filename={"Report.csv"}
                        className="btn-success btn ms-4"
                      >
                        Download Button
                      </CSVLink>
                   
                  </Col>
                </Row>

                <Table
                  className="no-wrap mt-3 align-middle"
                  responsive
                  bordered
                >
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Total Push</th>
                      {dates?.map((d) => (
                        <th>{d}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {reportsData.map((tdata, index) => (
                      <tr key={index} className="border-top">
                        <td>
                          <div className="d-flex align-items-center p-2">
                            <div>
                              <h6 className="mb-0">{tdata?.city}</h6>
                              {/* <span className="text-muted">{tdata.email}</span> */}
                            </div>
                          </div>
                        </td>
                        <td>{tdata?.totalEmails}</td>
                        {tdata.dates.map((d) => (
                          <td>{d?.totalEmails}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ManageUsers;
