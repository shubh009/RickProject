import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { backendUrl } from "../utils/axios";
import moment from "moment";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Starter = () => {
  const [tabData, setTabData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checked, seChecked] = useState(false);

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `${backendUrl}/dashboard/getDashboardData`
    );
    console.log(data);
    setTabData(data?.dashboardData);
    setLoading(false);
  };

  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle={`Total Push: ${moment()
              .subtract(3, "month")
              .format("MMMM")}`}
            earning={
              tabData.find(
                (tdata) =>
                  tdata.month === moment().subtract(3, "month").format("MMMM")
              )?.monthlyCount || 0
            }
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle={`Total Push: ${moment()
              .subtract(2, "month")
              .format("MMMM")}`}
            earning={
              tabData.find(
                (tdata) =>
                  tdata.month === moment().subtract(2, "month").format("MMMM")
              )?.monthlyCount || 0
            }
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle={`Total Push: ${moment()
              .subtract(1, "month")
              .format("MMMM")}`}
            earning={
              tabData.find(
                (tdata) =>
                  tdata.month === moment().subtract(1, "month").format("MMMM")
              )?.monthlyCount || 0
            }
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle={`Total Push: ${moment().format("MMMM")}`}
            earning={
              tabData.find((tdata) => tdata.month === moment().format("MMMM"))
                ?.monthlyCount || 0
            }
            icon="bi bi-bag"
          />
        </Col>
      </Row>

      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables tabData={tabData} />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
