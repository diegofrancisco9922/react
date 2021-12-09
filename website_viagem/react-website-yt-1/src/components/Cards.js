import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira estes destinos INCRÍVEIS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/veu_da_noiva.jpg'
              text='Explore cachoeiras incríveis em Minas Gerais'
              label='Aventura'
              path='/services'
            />
            <CardItem
              src='images/maragogi.jpg'
              text='Conheça os melhores resorts no Nordeste'
              label='Praia'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cruzeiro.jpg'
              text='Descubra o mar como nunca antes visto'
              label='Cruzeiro'
              path='/services'
            />
            <CardItem
              src='images/internacional.jpg'
              text='Conheça novas culturas fora do Brasil'
              label='Internacional'
              path='/products'
            />
            <CardItem
              src='images/ferias.jpg'
              text='Uma seleção de pacotes para suas próximas férias'
              label='Pacotes'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;