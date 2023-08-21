import { Link } from 'react-router-dom';
import { ReactComponent as UfoIcon } from '../../assets/icons/ufo-flying-svgrepo-com.svg';

const Logo = () => (
  <div className="d-flex align-items-center">
    <Link to="/">
      <UfoIcon className="link-icon" />
    </Link>

    <h1 className="fs-4">Ufo-chat</h1>
  </div>
);

export default Logo;
