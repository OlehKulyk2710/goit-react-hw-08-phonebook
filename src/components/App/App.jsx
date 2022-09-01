import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Layout, Registration, LogIn, Contacts } from 'pages';
import { Home, NotFound } from 'components';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<LogIn />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
