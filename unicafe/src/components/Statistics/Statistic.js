const Statistic = ({ text, value }) => {
    return (
      <tr>
        <th>{text}</th>
        <th>
          {text === "positive" || text === "average" ? value.toFixed(1) : value}{" "}
          {text === "positive" && "%"}
        </th>
      </tr>
    );
  };

  export default Statistic