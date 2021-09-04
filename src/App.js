import './App.css';
import seedColors from './seeds/seedColors';
import Palette from './components/Palette';

import {generatePalette} from './components/colorHelpers';

function App() {

  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
