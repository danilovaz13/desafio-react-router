import React from 'react';
import styles from './Contato.module.css';
import foto from '../assets/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Vaz | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>danilovaz@gmail.com</li>
          <li>(87)9 9900-9900</li>
          <li>Rua Ali Perto, 220</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
