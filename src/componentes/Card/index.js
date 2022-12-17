import React from 'react';
import './styles.css'

function Card(props) {
  return (
    <div className='box-card'>
        <div className='nomeSigno'>{props.signo}</div>

        <img className='img-signo' src={props.imagem} alt={props.signos} />

        <div className='periodoNascimento'>{props.dataInicio} - {props.dataFim}{""}</div>
    </div>
  );
}

export default Card;