import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../context/contextHooks';
import { Container } from 'react-bootstrap';
import Logo from "./Logo";

const Header = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const getLogOut = () => {
    logOut();
    navigate('/login');
  };

  return (
    <>
      <header className="bg-secondary bg-gradient bg-opacity-10 p-1">
      <Container fluid="md" className="d-flex justify-content-between">
      <Logo></Logo>


{/* <ul>
  <li>
    <Link to="/">Hexlet chat</Link>
  </li>
  <li>
    <Link to="/login">Login</Link>
  </li>
  <li>
    <Link to="/signup">Registration</Link>
  </li>
</ul> */}

{user ? <Button onClick={getLogOut}>Выйті</Button> : null}
      </Container>

      </header>
    </>
  );
};

export default Header;
