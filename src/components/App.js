import { useState, useEffect } from 'react';
import '../styles/App.css';
import Card from './Card';
import { useShuffleArray } from './customHooks';
import { getRandomCards } from './helpers';

const App = () => {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [chosenCards, setChosenCards] = useState([]);
  const [cards, setCards] = useState(getRandomCards());
  const shuffleCards = useShuffleArray(setCards);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore]);

  const handleCardClick = (cardText, cardElement) => {
    if (cardElement.disabled) return;

    cardElement.disabled = true;

    if (chosenCards.includes(cardText)) {
      cardElement.classList.add("glow-red");
      setTimeout(() => {
        cardElement.classList.remove("glow-red");
        cardElement.disabled = false;
        setChosenCards([]);
        setCurrentScore(0);
        setCards(getRandomCards());
        shuffleCards();
      }, 500);
    } else {
      cardElement.classList.add("glow-green");
      setTimeout(() => {
        cardElement.classList.remove("glow-green");
        cardElement.disabled = false;
        setCurrentScore(currentScore + 1);
        setChosenCards([...chosenCards, cardText]);
        shuffleCards();
      }, 500);
    }
  };

  return (
    <div>
      <h3>Try not to pick the same card twice!</h3>
      <p>High Score: {bestScore}</p>
      <p>Current Score: {currentScore}</p>
      <div className="card-grid">
        {cards.map((name, index) => (
          <Card
            key={index}
            id={`card${index}`}
            name={name}
            onClick={(e) => handleCardClick(name, e.currentTarget)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
