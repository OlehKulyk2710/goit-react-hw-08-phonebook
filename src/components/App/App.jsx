import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Layout, UserRegistration, UserLogin, Contacts, NotFound } from 'pages';
import { Home } from 'components';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<UserRegistration />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
