import Statistic from "./Statistic";

const Statistics = ({ good, bad, neutral, avg, positive, all }) => {
  return (
    <>
      <h3>Statistics </h3>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={avg} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
