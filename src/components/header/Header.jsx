
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import Logo from '../../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        {/* LOGO */}
        <Link to="/" className={styles.LogoBox}>
          <img src={Logo} alt="Logo Médicos e Dentistas" />
          <span>Médicos & Dentistas</span>
        </Link>

        {/* BOTÃO HAMBÚRGUER (Visível apenas no mobile) */}
        <button 
          className={styles.Hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVEGAÇÃO */}
        <nav className={`${styles.Nav} ${menuOpen ? styles.NavOpen : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/voluntario" className={styles.BtnVoluntario}>
                Seja Voluntário
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;