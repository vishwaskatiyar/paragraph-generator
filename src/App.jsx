import { useState } from "react";
import data from "./Data/data";

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue <= 0 || isNaN(inputValue)) {
      setErrorMessage("Please enter a valid positive number.");
      return;
    }

    if (inputValue > data.paragraphs.length) {
      setErrorMessage(
        "Input value exceeds available data. Showing all paragraphs."
      );
      setParagraphs(data.paragraphs);
    } else {
      const selectedParagraphs = data.paragraphs.slice(0, parseInt(inputValue));
      setParagraphs(selectedParagraphs);
    }

    setInputValue("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-400 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          TIRED OF BORING LOREM IPSUM?
        </h1>
        <form
          className="flex items-center justify-center space-x-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="amount" className="text-gray-800">
            Number of Paragraphs:
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="border border-gray-300 rounded-md p-2 w-24 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter amount"
            onChange={handleInputChange}
            value={inputValue}
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Generate
          </button>
        </form>
        {errorMessage && (
          <div className="mt-4 text-red-600">{errorMessage}</div>
        )}
        <div className="mt-8 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
