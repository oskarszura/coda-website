// @flow
import React from 'react';
import { render } from 'react-dom';
import { Logo } from 'graphen';

type Props = {};

export default function Services(props: Props) {
  return (
    <section className="l-service">
      <article className="l-service__item">
        <div className="l-service__left">
          <div className="l-service__title">Software Consultancy</div>
          <div className="l-service__content">
            Use our experience with writing complex software applications for
            premium clients at your house.
          </div>
        </div>
        <div className="l-service__right">
          <img className="l-service__image" src="images/consultancy.jpg" />
        </div>
      </article>
      <article className="l-service__item l-service__item--reversed">
        <div className="l-service__left">
          <img className="l-service__image" src="images/webapp.jpg" />
        </div>
        <div className="l-service__right">
          <div className="l-service__title">Web Applications</div>
          <div className="l-service__content">
            Web Applications became a golden standard in general purpose
            business applications and online marketing. Create a custome web
            based application for your company.
          </div>
        </div>
      </article>
      <article className="l-service__item">
        <div className="l-service__left">
          <div className="l-service__title">Mobile Applications</div>
          <div className="l-service__content">
            Mobile applications became a bridge between companies and their
            clients. Create a custom mobile app for your company and keep your
            clients updated.
          </div>
        </div>
        <div className="l-service__right">
          <img className="l-service__image" src="images/mobileapp.jpg" />
        </div>
      </article>
    </section>
  );
}
