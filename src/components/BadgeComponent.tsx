import React from "react";
import { Badge } from "flowbite-react";

interface IBadgeProps {
  status: "PENDING" | "ACCEPTED" | "REJECTED";
}

const BadgeComponent: React.FC<IBadgeProps> = ({ status }) => {
  switch (status) {
    case "PENDING":
      return (
        <Badge style={{ display: "inline-block" }} color="info">
          Default
        </Badge>
      );
    case "ACCEPTED":
      return <Badge color="success">Default</Badge>;
    case "REJECTED":
      return <Badge color="danger">Default</Badge>;
    default:
      return <Badge color="info">Unknow</Badge>;
  }
};

export default BadgeComponent;
