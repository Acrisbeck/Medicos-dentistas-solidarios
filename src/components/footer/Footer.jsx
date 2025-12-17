import React from "react";
import {Link} from 'react-router-dom'
import styles from './footer.module.scss';
import Logo from '../../assets/logo.png';
import EmailIcon from '../../assets/email.png';
import TelefoneIcon from '../../assets/telefone.png';
import LocalizacaoIcon from '../../assets/localizacao.png';


const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterContent}>
                <div className= {styles.Column}>
                    <Link to= '/' className={styles.LogoLink}>
                    <img src={Logo} alt="Logo"/>
                    Médicos & Dentistas
                </Link>
                <p>Saúde e cuidade sem barreiras para toda a comunidade.</p>
                </div>
                <div className={styles.Column}>
                    <h3>Contato</h3>
                    <div className={styles.ContactItem}>
                        <img src={EmailIcon} alt="Email" className={styles.ContactIcon} />
                        <a href="tel:+551130000000">(11)3000-0000</a>
                        
                    </div>
                    <div className={styles.ContactItem}>
            <img src={LocalizacaoIcon} alt="Localização" className={styles.ContactIcon} />
            <p>São Paulo, Brasil</p>
          </div>
        </div>

        {/* COLUNA 3: REDES SOCIAIS */}
        <div className={styles.Column}>
          <h3>Redes Sociais</h3>
          <nav className={styles.SocialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>
                </div>
            </div>
            <div className={styles.Copyright}>
        <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
      </div>
        </footer>
    );
};

export default Footer; 