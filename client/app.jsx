// @flow
import React from 'react';
import { render } from 'react-dom';
import { Logo } from 'graphen';

const appContainer = document.querySelector('.js-app');

type Props = {};

function App(props: Props) {
  return (
    <>
      <section className="l-splash">
        <Logo className="l-logo" />
      </section>
    </>
  );
}

if (appContainer) {
  render(<App />, appContainer);
}
