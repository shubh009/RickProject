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
              <h4 className="mt-1">
                {" "}<i className="bi bi-bell me-2"> </i> Tracking Reports
              </h4>
              <Row>
                <Col lg="6" className="mt-3">
                  <button className="btn-success btn"> Download Button</button>
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
                      <Label for="exampleEmail">end Date</Label>
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
            <CardTitle>Your Reports In Selected Date Range is</CardTitle>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ManageUsers;
