import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, bad, neutral }) => {
  const sumFeedback = () => good + bad + neutral;
  const calcPositive = () => (good / sumFeedback()) * 100;
  const calcAverage = () => (good - bad) / sumFeedback();

  if (sumFeedback() === 0) return <div>No feedback given</div>;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={sumFeedback()} />
        <StatisticLine text="average" value={calcAverage()} />
        <StatisticLine text="positive" value={calcPositive() + " %"} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleState = (state) => {
    switch (state) {
      case "bad":
        setBad(bad + 1);
        break;
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <h2>Give Feedback</h2>
      <div>
        <Button text="good" handleClick={() => handleState("good")} />
        <Button text="neutral" handleClick={() => handleState("neutral")} />
        <Button text="bad" handleClick={() => handleState("bad")} />
      </div>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
