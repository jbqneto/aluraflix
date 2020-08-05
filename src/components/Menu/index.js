import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/log_aluraflix.svg';
import './menu.css';
import ButtonLink from './ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo Aluraflix" />
      </Link>

      <ButtonLink as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Link
      </ButtonLink>

    </nav>
  )
}

export default Menu;