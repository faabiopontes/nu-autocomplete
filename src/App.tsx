import Autocomplete from "./components/Autocomplete";

const App = () => (
  <div className="App">
    <Autocomplete
      suggestions={["White", "Black", "Green", "Blue", "Yellow", "Red"]}
    />
  </div>
);

export default App;
