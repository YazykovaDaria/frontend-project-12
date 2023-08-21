import { Outlet, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer';

const Layout = () => {
  const mainLocation = '/';
  const location = useLocation().pathname;
  const [isMainLocation, setMainLocation] = useState(false);

  useEffect(() => {
    if (location === mainLocation) {
      setMainLocation(true);
    } else {
      setMainLocation(false);
    }
  }, [location]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container fluid="md" className="flex-grow-1">
        <Outlet />
      </Container>
      {!isMainLocation && <Footer />}
    </div>
  );
};

export default Layout;
