/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Card from './components/Card';
import decl from './images/icon1.png';
import comp from './images/icon2.png';
import single from './images/icon3.png';
import jsx from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <div className='black-box'>
        <Navbar />
        <div className='text-button'>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <Button />
        </div>
      </div>
      <div className='card-box'>
        <Card img={decl} title="Declarative" desc="React makes it painless to create interactive UIs." />
        <Card img={comp} title="Components" desc="Build encapsulated components that manage their state." />
        <Card img={single} title="Single-Way" desc="A set of immutable values are passed to the component's." />
        <Card img={jsx} title="JSX" desc="Statically-typed, designed to run on modern browsers." />
      </div>
    </div>
  );
}

export default App;