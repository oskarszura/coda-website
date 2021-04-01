// @flow
import React from 'react';
import { render } from 'react-dom';

type Props = {};

export default function Contact(props: Props) {
  return (
    <section className="l-contact l-section" id="contact">
      <header className="l-section__title">Contact</header>
      <article className="l-section__content l-contact__content">
        <p>
          <ul className="l-contact__data">
            <li className="l-contact__datum">POLAND</li>
            <li className="l-contact__datum">31-340 Kraków</li>
            <li className="l-contact__datum">ul. Józefa Chełmońskiego 130P/1</li>
            <li className="l-contact__datum">NIP: 6282159096</li>
            <li className="l-contact__datum">REGON: 120957802</li>
            <li className="l-contact__datum">oszura@codait.net</li>
          </ul>
        </p>
      </article>
    </section>
  );
}
