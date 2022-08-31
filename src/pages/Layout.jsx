import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Header, Main } from 'components';

export const Layout = () => {
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

// {
//  <h1 className={css.title__phonebook}>Phonebook</h1>
//       {data && <ContactForm contacts={data} />}

//       <h2 className={css.title__contacts}>Contacts</h2>
//       <Filter />
//       {data && <ContactList contacts={data} />}
// }
// {
//   <Toaster position="top-left" />
// }
