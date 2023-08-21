import {
  Routes, Route,
} from 'react-router-dom';
import AuthProvider from './Providers/AuthProvider';

import Layout from './Layout';
import ChatPage from './ChatPage/ChatPage';
import LoginPage from '../pages/Login';
import NotFound from './NotFound';

const App = () => (

  <AuthProvider>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ChatPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  </AuthProvider>
);

const Dashboard = () => (
  <div>
    <h2>Registration</h2>
  </div>
);

export default App;
