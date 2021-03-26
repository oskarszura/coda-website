// @flow
import React from 'react';
import { render } from 'react-dom';

type Props = {};

export default function About(props: Props) {
  return (
    <section className="l-clients l-section">
      <header className="l-section__title l-clients__title">
        I've worked with
      </header>
      <article className="l-clients__content"></article>
    </section>
  );
}
