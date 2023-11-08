import { useState } from 'react';
import './App.css';
import ColoredBoxGrid from './components/Square/ColoredBox';
import Solution from './components/Square/Solution';

function App() {
  const [value, setValue] = useState([2, 5, 5, 2, 3, 5]);
  const [inputValue, setInputValue] = useState('');
  const [maxSideLength, setMaxSideLength] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    const newValue = inputValue
      .split(' ')
      .map((str) => parseInt(str, 10))
      .filter((num) => !isNaN(num));

    setValue(newValue);
  };

  return (
    <div className="App">
      <input
        type="text"
        className="input-value"
        name="value"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter the numbers, e.g., 1 5 3 5 9 6"
      />
      <button onClick={handleButtonClick}>Update Value</button>
      <Solution A={value} setMaxSideLength={setMaxSideLength} />
      <ColoredBoxGrid A={value} maxSideLength={maxSideLength} />
    </div>
  );
}

export default App;
