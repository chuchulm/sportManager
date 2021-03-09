import React from 'react';
import Link from 'next/link';

import img2 from '../../assets/img/brand/logo-bima.png';
import img1 from '../../assets/img/brand/computadora.png';

const Dashboard = () => {
  return (
    <header className="hero">
      <div className="container__hero">
        <nav className="nav__hero">
          <div className="nav__container">
            <div className="logo">
              <h2 className="logo__name ">
                <img src={img2} className="" />
              </h2>
            </div>
            <div className="links mt-3">
              <a href="#" className="link">
                INICIO
              </a>
              <a href="#" className="link">
                TIPO DE CENTROS
              </a>
              <Link href="/auth/login" onClick={(e) => e.preventDefault()}>
                <small className="link link--btn--sesion">Iniciar sesion</small>
              </Link>
            </div>
          </div>
        </nav>

        <section className="hero__main">
          <div className="hero__textos">
            <h1 className="title">
              SOFTWARE PARA CENTROS DEPORTIVOS{' '}
              <span className="title--active">LIDER EN INNOVACION</span>
            </h1>

            <p className="copy">
              Es hora de quitarte los dolores de cabeza al gestionar tu Gym. Creamos apps
              personalidascon tu marca y te brindamos sistemas de administracion reservas, rutinas y
              marketing en la nube.{' '}
            </p>
            <a href="#" className="cta mr-2">
              VER VIDEO
            </a>
            <a href="#" className="cta">
              DEMO GRATIS
            </a>
          </div>
          <img src={img1} className="mockup mr-5" />
        </section>
      </div>
    </header>
  );
};

export default Dashboard;
