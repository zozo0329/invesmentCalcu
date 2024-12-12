import { useState } from "react";
import FormCal from "./Components/FormCal/FormCal";
import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";
function App() {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userData) => {
    setUserInput(userData);
    console.log("Submited: ", userData);

    const yearlyData = [];
    if (userData) {
      let currentSavings = +userData.currentSavings; // feel free to change the shape of this input object!
      const yearlyContribution = +userData["yearlyContribution"]; // as mentioned: feel free to change the shape...
      const expectedReturn = +userData["expectedReturn"] / 100;
      const duration = +userData["duration"];

      // The below code calculates yearly results (total savings, interest etc)
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
      setResults(yearlyData);
    }
  };
  console.log(userInput, "DATADATA");
  console.log(results, "DATA");
  return (
    <div className="App-container">
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Header />
      <FormCal onCalculate={calculateHandler} />
      {!results.length && <h1>WALA PA DATA</h1>}
      {results.map((value, i) => {
        return (
          <Table
            year={value.year}
            savingsEndOfYear={value.savingsEndOfYear}
            yearlyInterest={value.yearlyInterest}
            initialInvesment={userInput.currentSavings}
            yearlyContri={userInput.yearlyContribution}
          />
        );
      })}
    </div>
  );
}

export default App;
