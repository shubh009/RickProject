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

const ManageUsers = () => {
  const tableData = [
    { name: "Shubhanshu", email: "Shubh@gmail.com", acesstype: "emp" },
    { name: "Anshu", email: "anshu@gmail.com", acesstype: "emp" },
    { name: "Sajid", email: "sajid@gmail.com", acesstype: "emp" }
  ];

  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-4 mb-0">
              
              <Row>
                <Col lg="6" className="mt-3">
                 <h4 className="mt-1">
                {" "}<i className="bi bi-bell me-2"> </i> Tracking Reports
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
                      />
                    </Label>

                    <Label for="exampleEmail" className="m-2">
                      <Label for="exampleEmail text-capital">end Date</Label>
                      <Input
                        id="exampleEmail"
                        name="sdate"
                        placeholder="Start Date"
                        type="date"
                      />
                    </Label>

                    <button className="btn-danger btn"> View Report</button>
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
                  <button className="btn-outline-dark btn mx-2 ms-5"> Week1</button>
                  <button className="btn-outline-dark btn mx-2"> Week2</button>
                  <button className="btn-outline-dark btn mx-2"> Week3</button>
                  <button className="btn-outline-dark btn mx-2"> Week4</button>
                  <button className="btn-success btn ms-4"> Download Button</button>
                </Col>
              </Row>
              
           <Table className="no-wrap mt-3 align-middle" responsive bordered>
            <thead>
              <tr>
                <th>Location</th>
                <th>Total Push</th>

                <th>18 Nov</th>
                <th>19 Nov</th>
                <th>20 Nov </th>
                <th>21 Nov </th>
                <th>22 Nov </th>
                <th>23 Nov </th>
                <th>24 Nov </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div>
                        <h6 className="mb-0">{tdata?.month}</h6>
                        {/* <span className="text-muted">{tdata.email}</span> */}
                      </div>
                    </div>
                  </td>
                  <td>{tdata?.monthlyCount}</td>
                  
                  <td>{tdata?.week1}</td>
                  <td>{tdata?.week2}</td>
                  <td>{tdata?.week3}</td>
                  <td>{tdata?.week4}</td>
                </tr>
              ))}
            </tbody>
          </Table>
            </CardBody>

             
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ManageUsers;
