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
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Total Push: August"
            earning="21"
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Total Push: September"
            month="Janurary"
            earning="40"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Total Push: October"
            earning="456"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Total Push: November"
            earning="210"
            icon="bi bi-bag"
          />
        </Col>
      </Row>

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
                  {tableData.map((tdata, index) =>
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
                        {tdata.acesstype}
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
              <Form>
                <FormGroup>
                  <Label for="examplename" className="fw-bold">
                    Name
                  </Label>
                  <Input id="examplename" name="name" placeholder="Name" />
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
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect" className="fw-bold">
                    Select User Type
                  </Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Admin Type</option>
                    <option>Employee</option>
                  </Input>
                </FormGroup>

                <Button className="mt-2 bg-success w-100 text-black fs-5">
                  {" "}<i className="bi bi-plus-circle" /> Add New User
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ManageUsers;
