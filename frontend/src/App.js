import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import NotFound from './components/NotFound';

const App = () => (
  <Container fluid="md">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Container>
);

const Layout = () => (
  <div>
    {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="signup">регистрация</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
    </nav>

    <hr />

    {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
    <Outlet />
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

export default App;
