import React from 'react';
import styles from './voluntario.module.scss';

const Voluntario = () => {
  return (
    <main className={styles.VoluntarioMain}>
      {/* SEÇÃO HERO */}
      <section className={styles.Hero}>
        <h1>Seja Voluntário</h1>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
      </section>

      {/* SEÇÃO DE CARDS */}
      <section className={styles.CardsSection}>
        <div className={styles.Card}>
          <h3>Impacto Direto</h3>
          <p>Sua dedicação salva vidas e transforma comunidades</p>
        </div>
        <div className={styles.Card}>
          <h3>Crescimento Pessoal</h3>
          <p>Desenvolva habilidades e cresça profissionalmente</p>
        </div>
        <div className={styles.Card}>
          <h3>Comunidade</h3>
          <p>Faça parte de uma rede de profissionais comprometidos</p>
        </div>
      </section>

      {/* SEÇÃO DO FORMULÁRIO */}
      <section className={styles.FormBg}>
        <div className={styles.Container}>
          <h2>Inscrição para Voluntários</h2>
          
          <div className={styles.FormWrapper}>
            <form>
              <div className={styles.FormSection}>
                <label>Dados Pessoais</label>
                <div className={styles.InputGroup}>
                  <input type="text" placeholder="Seu Nome *" required />
                  <input type="email" placeholder="Seu Email *" required />
                </div>
                <input type="tel" placeholder="Seu Telefone *" className={styles.FullInput} required />
              </div>

              <div className={styles.FormSection}>
                <label>Mensagem Adicional</label>
                <textarea 
                  placeholder="Conte-nos porque você quer ser voluntário..." 
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className={styles.BtnEnviar}>Enviar Inscrição</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Voluntario;

