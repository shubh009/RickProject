import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user1 from "../assets/images/users/user4.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = 'login'

  };

  return (
    <Navbar color="success" dark expand="md" className="shadow-lg">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list" />
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen
            ? <i className="bi bi-x" />
            : <i className="bi bi-three-dots-vertical" />}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <div className="me-auto">
          <h4 className="my-2 card-title text-white">
            Hello Rick, Good Morning{" "}
          </h4>
        </div>

        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle
            color="success"
            className="bg-success border-2 border"
          >
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            />
            <span className="mx-2 fw-bold">Rick, K</span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <a href="/#/user-profile">Edit Profile</a>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/change-password" Nav="true">
              Change Password
            </DropdownItem>
            <DropdownItem onClick={handleLogout} >Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
