import {
  Routes, Route,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AuthProvider from './Providers/AuthProvider';

import Header from './Header';
import Login from './LoginPage/Login';
import NotFound from './NotFound';

const App = () => (

  <AuthProvider>
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
  </AuthProvider>
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
