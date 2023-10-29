import { Col, Row } from "reactstrap";
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Progress
} from "reactstrap";
import "../assets/scss/custom.css";
import ProfileIcon from "../assets/images/users/user5.jpg";

const UserProfile = () => {
  return (
    <div>
      <Row className="mt-2">
        <Col sm="12" md="12" lg="1" />
        <Col sm="12" md="12" lg="4">
          <Card>
            <div className="profile w-100 text-center">
              <div>
                <img
                  src={ProfileIcon}
                  width="100%"
                  className="profile-circle shadow"
                />
                <h4 className="fw-bolder mt-4">Rick Westerfer</h4>
                <label className="fs-6 text-danger">Project Manager</label>
              </div>
            </div>
            <hr />

            <div className="subprofile">
              <label>WorkLoad</label>
              <Progress value={80}>80%</Progress>
            </div>

            <hr />
            <div className="subprofile">
              <label className="fw-bold fs-5">About Rick</label>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </Card>
        </Col>
        <Col sm="12" md="12" lg="5">
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              <i className="bi bi-lock" /> Account Informaation
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
                  <Label for="examplename" className="fw-bold">
                    City
                  </Label>
                  <Input id="examplename" name="name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename" className="fw-bold">
                    State
                  </Label>
                  <Input id="examplename" name="name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText" className="fw-bold">
                    Address
                  </Label>
                  <Input id="exampleText" name="text" type="textarea" />
                </FormGroup>

                <Button className="mt-2 bg-success w-100 text-black fs-5">
                  {" "} Update Informaation
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="12" lg="1" />
      </Row>
    </div>
  );
};

export default UserProfile;
