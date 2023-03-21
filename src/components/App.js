import { useState } from 'react';
import '../styles/App.css';
import Card from './Card';

const App = () => {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const incrementCurrentScore = () => setCurrentScore((prevScore) => prevScore + 1);
  const [chosenCards, setChosenCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState('');

  const checkCardNotChose = (card) => {

  }
  
  const handleCardClick = (e) => {
    const cardText = e.target.firstChild.textContent;
    setSelectedCard(cardText);
  }

  const cards = ['john', 'sarah', 'stan', 'herman', 'michael', 'emily', 'david', 'rachel', 'kevin', 'olivia', 'brian', 'lila'];
  shuffle(cards);
  const cardElements = cards.map(
    (name, index) => (
      <Card 
        key={index} 
        id={'card' + index} 
        name={name} 
        onClick={handleCardClick}
      />
    )
  );


  return (
    <div>
      <p>Best: {bestScore}</p>
      <p>Current: {currentScore}</p>
      <p>All Chosen: {chosenCards}</p>
      <p>Selected: {selectedCard}</p>
      <div className='card-grid'>
        {cardElements}
      </div>
    </div>
  )
}

export default App;

//helper functions
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}