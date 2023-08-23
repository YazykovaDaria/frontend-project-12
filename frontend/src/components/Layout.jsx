import { Outlet, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer';

const Layout = () => {
  const mainLocation = '/';
  const location = useLocation().pathname;
  const [isShowFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const isShow = location !== mainLocation;
    setShowFooter(isShow);
  }, [location]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container fluid="md" className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Outlet />
      </Container>
      {isShowFooter && <Footer />}
    </div>
  );
};

export default Layout;
