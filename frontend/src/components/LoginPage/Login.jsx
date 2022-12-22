import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';
import style from './Login.module.css';

const Login = () => (
  <Card className={style.form}>
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
