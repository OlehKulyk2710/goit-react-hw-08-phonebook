import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Header, Main } from 'components';

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Toaster position="top-left" />
    </>
  );
};

export default Layout;
