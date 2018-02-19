import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import AuthService from '../AuthService/AuthService';
import needAuth from '../NeedAuth/NeedAuth';
const Auth = new AuthService();

const App = ({ children }) => (
  <div>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </div>
);

export default needAuth(App);
