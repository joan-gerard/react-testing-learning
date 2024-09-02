import Label from "../components/Label";
import UserAccount from "../components/UserAccount";
import { User } from "../entities";
const regularUser: User = { id: 1, name: "Bob", isAdmin: false };
const adminUser: User = { id: 2, name: "Alice", isAdmin: true };

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Label labelId="welcome" />
      <p>HI</p>
      <UserAccount user={adminUser} />
    </div>
  );
};

export default HomePage;
