import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => (
  <Card>
    <Card.Body>

      <LoginForm />

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
