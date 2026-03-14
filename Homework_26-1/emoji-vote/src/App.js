import React, { useState, useEffect } from "react";
import EmojiItem from "./EmojiItem";

function App() {

  const [emojis, setEmojis] = useState(
    JSON.parse(localStorage.getItem("emojis")) || [
      { emoji: "😀", votes: 0 },
      { emoji: "😊", votes: 0 },
      { emoji: "😎", votes: 0 },
      { emoji: "🤩", votes: 0 },
      { emoji: "😍", votes: 0 }
    ]
  );

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("emojis", JSON.stringify(emojis));
  }, [emojis]);

  const vote = (index) => {

    const newEmojis = [...emojis];
    newEmojis[index].votes++;

    setEmojis(newEmojis);

  };

  const showResults = () => {

    const winner = emojis.reduce((max, item) =>
      item.votes > max.votes ? item : max
    );

    setWinner(winner);

  };

  const clearResults = () => {

    const reset = emojis.map(item => ({
      ...item,
      votes: 0
    }));

    setEmojis(reset);
    setWinner(null);

    localStorage.removeItem("emojis");

  };

  return (

    <div style={{ textAlign: "center" }}>

      <h1>Голосування за найкращий смайлик</h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px"
      }}>

        {emojis.map((item, index) => (
          <EmojiItem
            key={index}
            emoji={item.emoji}
            votes={item.votes}
            onVote={() => vote(index)}
          />
        ))}

      </div>

      <br />

      <button onClick={showResults}>
        Show Results
      </button>

      <button onClick={clearResults}>
        Очистити результати
      </button>

      {winner && (

        <div>

          <h2>Результати голосування</h2>

          <h3>Переможець:</h3>

          <div style={{ fontSize: "70px" }}>
            {winner.emoji}
          </div>

          <p>
            Кількість голосів: {winner.votes}
          </p>

        </div>

      )}

    </div>

  );
}

export default App;