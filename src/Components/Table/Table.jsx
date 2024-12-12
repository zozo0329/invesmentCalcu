import React from "react";
import "./Table.css";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
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
          {props.data.map((yearData) => {
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                <td>{formatter.format(yearData.yearlyInterest)}</td>
                {/*  */}
                <td>
                  {formatter.format(
                    yearData.savingsEndOfYear -
                      props.initialInvesment -
                      yearData.yearlyContribution * yearData.year
                  )}
                </td>
                <td>
                  {formatter.format(
                    props.initialInvesment +
                      yearData.yearlyContribution * yearData.year
                  )}
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>{props.year}</td>
            <td>{props.savingsEndOfYear}</td>
            <td>{props.yearlyInterest}</td>
            <td>
              {props.savingsEndOfYear -
                props.initialInvesment -
                props.yearlyContri * props.year}
            </td>
            <td>{props.initialInvesment + props.yearlyContri * props.year}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
