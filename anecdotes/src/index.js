import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [anecdotesVotes, setAnecdotesVotes] = useState(
    Array(props.anecdotes.length).fill({
      votesQuantity: 0,
    })
  );

  const handleNextAnecdote = () =>
    setSelected(Math.floor(Math.random() * props.anecdotes.length));

  const handleAnecdotesVotes = (anecdoteIndex) => {
    const copy = [...anecdotesVotes];
    copy[anecdoteIndex] = {
      ...copy[anecdoteIndex],
      votesQuantity: copy[anecdoteIndex].votesQuantity + 1,
    };
    setAnecdotesVotes(copy);
  };
  const anecdoteWithMoreVotes = () => {
    const maxVotes = Math.max(
      ...anecdotesVotes.map((anecdote) => anecdote.votesQuantity)
    );
    return anecdotesVotes.findIndex(
      (anecdote) => anecdote.votesQuantity === maxVotes
    );
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {anecdotesVotes[selected].votesQuantity} votes</p>
      <button onClick={() => handleAnecdotesVotes(selected)}>Vote</button>
      <button onClick={handleNextAnecdote}>Next anecdote</button>
      <h1>Anecdote with more votes</h1>
      <p>{props.anecdotes[anecdoteWithMoreVotes()]}</p>
      <p>Has {anecdotesVotes[anecdoteWithMoreVotes()].votesQuantity} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
