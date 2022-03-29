// import logo from './logo.svg';
// import {add, multiply} from './helpers';
// import data, {meow} from './cats';
import data from './random';
import RandomData from './RandomData';
import './App.css';


function App() {
 
  return (
  <RandomData data={data}/>
  );
}

export default App;
