
import { useState } from 'react';
import './index.jsx'
function App() {
  const  [sum , setNum] = useState(0);
  function addNum() {
    setNum(sum + 1);
    
  }
  function subtractNum() {
    if (sum ===0) {
     console.log("Number in not back");
     return 
    }
    setNum(sum - 1);
  }

return (
  <div>
    <h1>Value of Number</h1>
    <h2>{sum}</h2>
    <button onClick={addNum}>ADD +</button>
    <button onClick={subtractNum}>SUBTRACT -</button>
</div>
)
}

export default App;
