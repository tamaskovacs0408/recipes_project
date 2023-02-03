import './App.css';
import {RecipeFinder} from "./Components/RecipeFinder/RecipeFinder";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Recipes from around the world</h1>
      </header>
      <RecipeFinder />
    </div>
  );
}

export default App;
