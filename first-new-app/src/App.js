// import logo from './logo.svg';
// import {add, multiply} from './helpers';
// import data, {meow} from './cats';
import data from './random';
import RandomData from './RandomData';
import fakeLogo from './fakeLogo.svg';
// import moreData from './moreData';
import './App.css';


function App() {
//  console.log(fakeLogo);
  return (
    <div>
    <img src={fakeLogo} width="150" />
      <RandomData data={data} username="Amy" />
      {/* <RandomData data={moreData} username="Diego" /> */}
    </div>
  );
}

export default App;
