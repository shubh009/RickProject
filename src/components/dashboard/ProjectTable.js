import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    name: "Janurary",
    project: "67",
    status: "90",
    weeks: "35",
    budget: "111",
    week4: "45"
  },
  {
    name: "Feburary",
    project: "90",
    status: "78",
    weeks: "35",
    budget: "22",
    week4: "35"
  },
  {
    name: "March",
    project: "56",
    status: "56",
    weeks: "35",
    budget: "5",
    week4: "76"
  },
  {
    name: "April",
    project: "78",
    status: "89",
    weeks: "35",
    budget: "3",
    week4: "87"
  },
  {
    name: "May",
    project: "102",
    status: "done",
    weeks: "35",
    budget: "12",
    week4: "23"
  },
  {
    name: "June",
    project: "45",
    status: "56",
    weeks: "35",
    budget: "89",
    week4: "34"
  },
  {
    name: "July",
    project: "94",
    status: "done",
    weeks: "35",
    budget: "95",
    week4: "56"
  }
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Snow Tracker (Month Wise Breakup)</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Snow Tracking Overview
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Months</th>
                <th>Total Push</th>

                <th>Week - 1</th>
                <th>Week - 2</th>
                <th>Week -3 </th>
                <th>Week -4 </th>
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
                        <span className="text-muted">
                          {tdata.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    {tdata.project}
                  </td>
                  <td>
                    {tdata.status}
                  </td>
                  <td>
                    {tdata.weeks}
                  </td>
                  <td>
                    {tdata.budget}
                  </td>
                  <td>
                    {tdata.week4}
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
