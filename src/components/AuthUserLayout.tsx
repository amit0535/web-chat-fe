import { Outlet, Link } from "react-router-dom";

function AuthUserLayout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AuthUserLayout;
