const { default: Navbar } = require("./components/Navbar");
const { default: Home } = require("./Dashboard/Home");

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
