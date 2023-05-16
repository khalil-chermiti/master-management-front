import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Avatar } from "flowbite-react";
import { Candidate } from "../types/CandidateTypes";
import { authContext } from "../contexts/AuthContext";

interface IUserProps {
  user: Omit<Candidate, "password"> | null;
}

const CandidateHeaderComponent: React.FC<IUserProps> = ({ user }) => {
  const navigate = useNavigate();
  const { logout } = useContext(authContext)!;

  if (!user) return <></>;
  return (
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">
            {user.last_name + user.first_name}
          </span>
          <span className="block truncate text-sm font-medium">
            {user.email}
          </span>
        </Dropdown.Header>
        <Dropdown.Item onClick={() => navigate("/applications")}>
          Applications
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default CandidateHeaderComponent;
