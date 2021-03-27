// @flow
import React from 'react';
import { render } from 'react-dom';
import { Logo } from 'graphen';

type Props = {};

export default function Services(props: Props) {
  return (
    <section className="l-service l-section" id="services">
      <header className="l-section__title l-service__title">
        Services I offer
      </header>
      <article className="l-service__content">
        <div className="l-service-gallery">
          <div className="l-service-gallery__item">
            <div className="l-service-gallery__image l-service-gallery__image--mobile" />
          </div>
          <div className="l-service-gallery__item">
            <div className="l-service-gallery__container">
              <div className="l-service-gallery__title">Embedded Systems</div>
              <div className="l-service-gallery__description">
                Embedded systems can be an excellent tool when it comes to
                automation of physical business processes.
              </div>
            </div>
          </div>
          <div className="l-service-gallery__item">
            <div className="l-service-gallery__image l-service-gallery__image--web" />
          </div>
          <div className="l-service-gallery__item">
            <div className="l-service-gallery__container">
              <div className="l-service-gallery__title">
                Mobile Applications
              </div>
              <div className="l-service-gallery__description">
                Mobile applications became a bridge between companies and their
                clients, Create a custom mobile app for your company and keep
                your clients updated.
              </div>
            </div>
          </div>
          <div className="l-service-gallery__item">
            <div className="l-service-gallery__image l-service-gallery__image--embedded" />
          </div>
          <div className="l-service-gallery__item">
            <div className="l-service-gallery__container">
              <div className="l-service-gallery__title">Web Applications</div>
              <div className="l-service-gallery__description">
                Web Applications became a golden standard in general purpose
                business applications and online marketing. Create a custome web
                based application for your company.
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
