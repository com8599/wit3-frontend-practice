import { Header } from "./Header";
import Body from "./Body";

function App() {
  const user = {
    name: "serin"
  };

  return (
    <div className="App">
      <Header username = {user.name} />
      <Body></Body>
    </div>
  );
}

export default App;
