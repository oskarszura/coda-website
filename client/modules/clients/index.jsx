// @flow
import React from 'react';
import { render } from 'react-dom';

type Props = {};

export default function About(props: Props) {
  return (
    <section className="l-clients l-section" id="projects">
      <header className="l-section__title l-clients__title">Projects</header>
      <article className="l-clients__content">
        <div className="l-clients-gallery">
          <a
            className="l-clients-gallery__item"
            href="https://github.com/smart-evolution"
          >
            <div className="l-clients-gallery__pr-1" />
          </a>
          <a
            className="l-clients-gallery__item"
            href="https://github.com/smart-evolution"
          >
            <div className="l-clients-gallery__pr-1" />
          </a>
          <a
            className="l-clients-gallery__item"
            href="https://github.com/smart-evolution"
          >
            <div className="l-clients-gallery__pr-1" />
          </a>
        </div>
      </article>
    </section>
  );
}
