import Home from '@/pages/Home';
import ProductListPage from '@/pages/ProductListPage';
import ROUTERS from '@/constants/route';
import Test from '@/pages/Test';
import { createBrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import ProfileEditPage from './pages/ProfileEditPage';

const routeList = [
  {
    path: ROUTERS.HOME,
    element: <Home />,
  },
  {
    path: ROUTERS.PRODUCT.LIST,
    element: <ProductListPage />,
  },
  {
    path: ROUTERS.PROFILE.EDIT,
    element: <ProfileEditPage />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: ROUTERS.REGISTER,
    element: <Register />,
  },
];

export const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      // errorElement <Error> 만들기
    };
  }),
);

export default router;
