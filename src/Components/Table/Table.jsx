import React from "react";
import "./Table.css";
const Table = (props) => {
  return (
    <div className="Table-container">
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.year}</td>
            <td>{props.savingsEndOfYear}</td>
            <td>{props.yearlyInterest}</td>
            <td>
              {props.savingsEndOfYear -
                props.initialInvesment -
                props.yearlyContri * props.year}
            </td>
            <td>{props.initialInvesment + props.yearlyContri * props.year}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
