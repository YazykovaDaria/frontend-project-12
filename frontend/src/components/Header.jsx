import { Link, Outlet } from 'react-router-dom';

const Header = () => (
  <>
    <header>
      <ul>
        <li>
          <Link to="/">Hexlet chat</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Registration</Link>
        </li>
      </ul>
    </header>
    <Outlet />
  </>
);

export default Header;
