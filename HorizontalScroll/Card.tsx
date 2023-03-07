import React, { useState, useEffect } from 'react';

const Card = ({ card, index }) => {
  return (
    <a href={card?.href} target="_blank">
      <div className="card">
        <h1>{card.content}</h1>
        <div className="card-bottom">
          <img src={card?.avatar} />
          <p>card name: {card.name}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
