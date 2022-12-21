import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import PrivateRoutes from './PrivateRoutes';
import { AuthProvider } from '../contexts/AuthContext';

export default function Router() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} exact />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
