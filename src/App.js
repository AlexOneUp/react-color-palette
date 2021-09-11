import './App.css';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seeds/seedColors';
import Palette from './components/Palette';

import { generatePalette } from './components/colorHelpers';

function App() {

  
    function findPalette(id) {
      return seedColors.find(function (palette) {
        return palette.id == id;
      });
    };
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <h1>Path /</h1>}
        />

        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>

      {/* <Palette palette={generatePalette(seedColors[4])} /> */}
    </div>
  );
}

export default App;
