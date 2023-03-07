import React, { useState, useEffect } from 'react';
import Card from './Card';
import { cardDetails } from '../cardDetails';
import Row from '../HorizontalScroll/Row';

const Scroll = () => {
  const [playing, setPlaying] = useState(true)
  return (
    <div className="container">
      <Row speed={20} playing={playing} >
      {cardDetails.map((card, idx) => (
        <Card key={idx} card={card} />
      ))}
      </Row>
    </div>
  );
};
export default Scroll;
