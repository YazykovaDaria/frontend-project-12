import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2>404 not found</h2>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
  </div>
);

export default NotFound;
