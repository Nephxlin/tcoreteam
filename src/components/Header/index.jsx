import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
      </div>
      <div className="top-bar">
        <Link to="/services">Serviços</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/solutions">Soluções</Link>
        <Link to="/about">Sobre nós</Link>
      </div>
    </header>
  )
}
