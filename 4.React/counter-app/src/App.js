import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
    <Counter></Counter>
    </div>
   
  );
}

function Counter (){
  const[count, setCount] = useState(0)
  const increase =() =>setCount(count + 1)
  const decrease =() =>setCount(count - 1)
  const reSet = () => setCount(0)
  return(
    <div className='container'>
    <h2>Counter - App</h2>
    <h2 className='count'>Count : {count}</h2>
    <button onClick={increase}>Add</button>
    <button onClick={decrease}>Minus</button>
    <button onClick={reSet}>Reset</button>
    </div>
  )
}
export default App;
