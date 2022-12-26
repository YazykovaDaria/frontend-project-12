import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useAuth } from '../context/contextHooks';

const Header = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const getLogOut = () => {
    logOut();
    navigate('/login');
  };

  return (
    <>
      <header className="d-flex justify-content-between">
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
        {user ? <Button onClick={getLogOut}>Выйті</Button> : null}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
