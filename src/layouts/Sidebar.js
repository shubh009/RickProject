import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2"
  },
  {
    title: "Add Tracking",
    href: "/tracking",
    icon: "bi bi-bell"
  },
  {
    title: "Reports",
    href: "/reports",
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

  const location = useLocation();

  const handleNavigation = (href) => {
    window.location.href = href;  // Directly setting the window location
  };

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
          {navigation.map((navi, index) => (
            <div key={index} className="sidenav-bg">
              <p
                onClick={() => handleNavigation(navi.href)}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
                style={{ cursor: "pointer" }}
              >
                <i className={navi.icon} />
                <span className="ms-3 d-inline-block">
                  {navi.title}
                </span>
              </p>
            </div>
          ))}
          <Button
            color="danger"
            tag="a"
            className="mt-3"
            href="/#/login"
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
