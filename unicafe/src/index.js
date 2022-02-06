import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState([]);

  const handlerComments = (choise) => {
    switch (choise) {
      case "good": {
        setGood((prev) => prev + 1);
        setAverage(average.concat(1));
        return;
      }
      case "bad": {
        setBad((prev) => prev + 1);
        setAverage(average.concat(-1));
        return;
      }
      case "neutral": {
        setNeutral((prev) => prev + 1);
        setAverage(average.concat(0));
        return;
      }
      default:
        return [...average];
    }
  };

  const all = good + bad + neutral;

  const avg =
    average.length > 0
      ? average.reduce((previous, current) => (current += previous)) /
        average.length
      : 0;

  const positive =
    average.length > 0 && average.filter((comment) => comment === 1).length > 0
      ? (average
          .filter((comment) => comment === 1)
          .reduce((previous, current) => (current += previous)) /
          (bad + good + neutral)) *
        100
      : 0;

  return (
    <div>
      <h2>Give feedback.</h2>
      <Button handler={handlerComments} text="good" />
      <Button handler={handlerComments} text="bad" />
      <Button handler={handlerComments} text="neutral" />
      {all === 0 ? (
        <h3>No feedback given</h3>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          avg={avg}
          positive={positive}
          all={all}
        />
      )}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
