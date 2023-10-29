import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2"
  },
  {
    title: "Gmail Access",
    href: "#",
    icon: "bi bi-bell"
  },
  {
    title: "Reports",
    href: "#",
    icon: "bi bi-columns"
  },
  {
    title: "Manage Users",
    href: "/manage-users",
    icon: "bi bi-people"
  },
  {
    title: "Change Password",
    href: "/change-password",
    icon: "bi bi-key"
  }
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={() => showMobilemenu()}
          />
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) =>
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon} />
                <span className="ms-3 d-inline-block">
                  {navi.title}
                </span>
              </Link>
            </NavItem>
          )}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="#"
            style={{
              position: "absolute",
              bottom: "20px",
              width: "210px",
              fontSize: "20px",
              fontWeight: 700
            }}
          >
            <i className="bi bi-shield-fill-check" /> Logout
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
