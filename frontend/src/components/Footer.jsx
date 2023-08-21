import { Container } from 'react-bootstrap';
import { ReactComponent as GitIcon } from '../assets/icons/icons8-github.svg';

const Footer = () => (
  <footer className="bg-secondary bg-gradient bg-opacity-10">
    <Container fluid="md" className="d-flex justify-content-between align-items-center">
      <div>© 2022 by Yazykova Daria</div>
      <a href="https://github.com/YazykovaDaria/frontend-project-12">
        <GitIcon className="link-icon" width="30" height="50" />
      </a>
    </Container>

  </footer>
);

export default Footer;
