import './App.css';
import seedColors from './seeds/seedColors';
import Palette from './components/Palette';


function App() {
  return (
    <div className="App">
      <Palette {...seedColors[1]}/>
    </div>
  );
}

export default App;
