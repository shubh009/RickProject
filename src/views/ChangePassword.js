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

const ChangePassword = () => {
  const tableData = [
    { name: "Shubhanshu", email: "Shubh@gmail.com", acesstype: "emp" },
    { name: "Anshu", email: "anshu@gmail.com", acesstype: "emp" },
    { name: "Sajid", email: "sajid@gmail.com", acesstype: "emp" }
  ];

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
                    New Password
                  </Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password"
                    type="Password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword" className="fw-bold">
                    Re-Type Password
                  </Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password"
                    type="Re Password"
                  />
                </FormGroup>

                <Button className="mt-2 bg-success w-100 text-black fs-5 mb-2">
                  {" "}<i className="bi bi-key" /> Change Password
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="12" lg="3" />
      </Row>
    </div>
  );
};

export default ChangePassword;
