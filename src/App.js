import Header from "./Header";
import Body from "./Body";

const date = new Date();

const calendar = {
  year: date.getFullYear(),
  month: String(date.getMonth() + 1),
  day: String(date.getDate()),
  hour: String(date.getHours()),
  minute: String(date.getMinutes()),
  second: String(date.getSeconds()),
};

function App() {
  return (
    <div>
      <Header username="김노정" />
      <Body calendar={calendar} />
    </div>
  );
}

export default App;
