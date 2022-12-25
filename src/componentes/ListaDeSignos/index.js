import React from 'react';
import Card from '../Card';
import Title from '../Title';
import './styles.css'


export default function ListaDeSignos() {
  return (
    <div>
      <Title />
      <div className="lista-grid">
        <Card
          signo="Aquário"
          dataInicio="21/01"
          dataFim="19/02"
          imagem="assets/aquario.jpg"
        />
        <Card
          signo="Peixes"
          dataInicio="20/02"
          dataFim="20/03"
          imagem="assets/peixes.jpg"
        />
        <Card
          signo="Áries"
          dataInicio="21/03"
          dataFim="20/04"
          imagem="assets/aries.jpg"
        />
        <Card
          signo="Touro"
          dataInicio="21/04"
          dataFim="21/05"
          imagem="assets/touro.jpg"
        />
        <Card
          signo="Gêmeos"
          dataInicio=" 22/05"
          dataFim="21/06"
          imagem="assets/gemeos.jpg"
        />
        <Card
          signo="Câncer"
          dataInicio="21/06"
          dataFim="23/07"
          imagem="assets/cancer.jpg"
        />
        <Card
          signo="Leão"
          dataInicio="24/07"
          dataFim="23/08"
          imagem="assets/leao.jpg"
        />
        <Card
          signo="Virgem"
          dataInicio="24/08"
          dataFim="23/09"
          imagem="assets/virgem.jpg"
        />
        <Card
          signo="Libra"
          dataInicio="24/09"
          dataFim="23/10"
          imagem="assets/libra.jpg"
        />
        <Card
          signo="Escorpião"
          dataInicio="24/10"
          dataFim="22/11"
          imagem="assets/escorpiao.jpg"
        />
        <Card
          signo="Sagitário"
          dataInicio="23/11"
          dataFim="21/12"
          imagem="assets/sagitario.jpg"
        />
        <Card
          signo="Capricórnio"
          dataInicio="22/12"
          dataFim="20/01"
          imagem="assets/capricornio.jpg"
        />
      </div>
    </div>
  );
}
