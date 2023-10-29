import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import PropTypes from "prop-types";

const ComponentCard = ({ children, title, subtitle, month }) => {
  return (
    <Card className="shadow-none">
      <CardTitle tag="h2" className="px-4 mb-1">
        {title}
      </CardTitle>
      <CardBody className="p-4 pt-2">
        <CardSubtitle className="mb-3">
          {subtitle || ""}
        </CardSubtitle>

        <div>
          {children}
        </div>
      </CardBody>
    </Card>
  );
};

ComponentCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.node
};

export default ComponentCard;
