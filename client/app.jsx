// @flow
import React from 'react';
import { render } from 'react-dom';
import { Logo } from 'graphen';
import About from './modules/about';
import Services from './modules/services';
import Clients from './modules/clients';
import Contact from './modules/contact';

const appContainer = document.querySelector('.js-app');

type Props = {};

function App(props: Props) {
  return (
    <>
      <section className="l-splash">
        <div className="l-splash__logo l-icon l-icon__logo" />
      </section>
      <About />
      <Services />
      <Clients />
      <Contact />
    </>
  );
}

if (appContainer) {
  render(<App />, appContainer);
}
