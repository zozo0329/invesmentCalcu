import { useState } from "react";
import FormCal from "./Components/FormCal/FormCal";
import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";
function App() {
  const [results, setResults] = useState(null);
  const calculateHandler = (userInput) => {
    console.log("Submited: ", userInput);
    setResults(userInput);

    const yearlyData = [];

    if (userInput) {
      let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
      const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
      const expectedReturn = +userInput["expected-return"] / 100;
      const duration = +userInput["duration"];

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
    }
  };
  return (
    <div className="App-container">
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Header />
      <FormCal onCalculate={calculateHandler} />
      <Table />
    </div>
  );
}

export default App;
