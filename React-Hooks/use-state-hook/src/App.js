
import './App.css';
import ClassComp from './ClassComp';
import Counter from './Counter';
import {CounterTwo as Rajan, CounterThree, CounterFive, CounterFour, CounterSix, CounterSeven} from './Counter'

function App() {
  return (
    <div className="App">
     <ClassComp />
     <Counter />
     <Rajan />
     <CounterThree />
     <CounterFour />
     <CounterFive></CounterFive>
     <CounterSix/>
     <CounterSeven/>
    </div>
  );
}

export default App;



// function Hello(){
//   console.log('Hello')
// }

// Hello()

// const hi = () => console.log('Hi,')
// hi()