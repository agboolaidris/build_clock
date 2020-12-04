const { default: Display_clock } = require("./Display_clock");
const { default: Set_clock } = require("./Set_clock");


function App() {
  return (
    <div className="App">
     
    <Set_clock/>
    <Display_clock />
    </div>
  );
}

export default App;
