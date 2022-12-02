import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Login = () => (
  <Card>
    <Card.Body>
      <Card.Title>Войти</Card.Title>

    </Card.Body>
    <Card.Footer>
      <small>
        Нет аккаунта?
        {' '}
        <NavLink to="/signup">Регистрация</NavLink>
      </small>
    </Card.Footer>
  </Card>
);

export default Login;
