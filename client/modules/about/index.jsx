// @flow
import React from 'react';
import { render } from 'react-dom';

type Props = {};

export default function About(props: Props) {
  return (
    <section className="l-about l-section" id="about">
      <header className="l-section__title">About me</header>
      <article className="l-section__content l-about__content">
        <p>
          I’m a professional software developer with an academic background and
          commercial experience since 2009.
        </p>
        <p>
          I create software in various areas like web (<strong>Go</strong>, JS),
          mobile (Swift), embedded (C/C++).
        </p>
      </article>
    </section>
  );
}
