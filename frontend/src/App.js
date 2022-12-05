import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Login from './components/LoginPage/Login';
import NotFound from './components/NotFound';

const App = () => (
  <Container fluid="md">
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Container>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Registration</h2>
  </div>
);

export default App;
