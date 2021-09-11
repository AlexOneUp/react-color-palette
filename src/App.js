import './App.css';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seeds/seedColors';
import Palette from './components/Palette';

import { generatePalette } from './components/colorHelpers';

function App() {

  return (
    <div className="App">
    <Switch>
    <Route exact path="/" render={() => <h1>Path /</h1>}/>
    <Route exact path="/palette/:id" render={() => <h1>Path /palette/id</h1>}/>
    </Switch>
    
      {/* <Palette palette={generatePalette(seedColors[4])} /> */}
    </div>
  );
}

export default App;
