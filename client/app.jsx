// @flow
import React from 'react';
import { render } from 'react-dom';
import { Logo } from 'graphen';
import Services from './modules/services';

const appContainer = document.querySelector('.js-app');

type Props = {};

function App(props: Props) {
  return (
    <>
      <section className="l-splash">
        <div className="l-splash__logo l-icon l-icon__logo" />
      </section>
      <Services />
    </>
  );
}

if (appContainer) {
  render(<App />, appContainer);
}
