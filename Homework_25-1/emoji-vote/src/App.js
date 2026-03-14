import React from "react";
import "./App.css";
import EmojiItem from "./EmojiItem";

class App extends React.Component {

  constructor(props) {
    super(props);

    const saved = JSON.parse(localStorage.getItem("emojis"));

    this.state = {
      emojis: saved || [
        { emoji: "😀", votes: 0 },
        { emoji: "😊", votes: 0 },
        { emoji: "😎", votes: 0 },
        { emoji: "🤩", votes: 0 },
        { emoji: "😍", votes: 0 }
      ],
      winner: null
    };
  }

  vote = (index) => {

    const emojis = [...this.state.emojis];

    emojis[index].votes++;

    this.setState({ emojis });

    localStorage.setItem("emojis", JSON.stringify(emojis));

  };

  showResults = () => {

    const winner = this.state.emojis.reduce((max,item)=>
      item.votes > max.votes ? item : max
    );
  
    this.setState({winner});
  
  };

  clearResults = () => {

    const emojis = this.state.emojis.map(item => ({
      ...item,
      votes: 0
    }));

    this.setState({
      emojis,
      winner: null
    });

    localStorage.removeItem("emojis");

  };

  render() {

    return (

      <div style={{ textAlign: "center" }}>

        <h1>Голосування за найкращий смайлик</h1>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px"
        }}>

          {this.state.emojis.map((item, index) => (
            <EmojiItem
              key={index}
              emoji={item.emoji}
              votes={item.votes}
              onVote={() => this.vote(index)}
            />
          ))}

        </div>

        <br />

        <button className="btn show-btn" onClick={this.showResults}>
          Show Results
        </button>

        <button className="btn clear-btn" onClick={this.clearResults}>
          Очистити результати
        </button>

        {this.state.winner && (

          <div className="results">

            <h2>Результати голосування</h2>

            <h3>Переможець:</h3>

            <div className="winner-emoji" style={{ fontSize: "60px" }}>
              {this.state.winner.emoji}
            </div>

            <p>
              Кількість голосів: {this.state.winner.votes}
            </p>

          </div>

        )}

      </div>

    );
  }

}

export default App;