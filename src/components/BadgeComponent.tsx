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
          Pending
        </Badge>
      );
    case "ACCEPTED":
      return <Badge color="success">Accepted</Badge>;
    case "REJECTED":
      return <Badge color="danger">Rejected</Badge>;
    default:
      return <Badge color="info">Unknown</Badge>;
  }
};

export default BadgeComponent;
