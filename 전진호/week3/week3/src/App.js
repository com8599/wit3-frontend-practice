import { Header, etc } from "./Header";

function Body({ school, city }) {
  return (
    <div>
      <h3>school : {school}</h3>
      <h3>city : {city}</h3>
    </div>
  );
}

function Footer({ etc }) {
  return <h3>Footer : {etc}</h3>;
}

function App() {
  const user = {
    name: "jinho",
    age: 20,
    school: "KU",
    city: "Uiwang",
  };

  return (
    <div className="App">
      <Header name={user.name} age={user.age} />
      <Body school={user.school} city={user.city} />
      <Footer etc={etc} />
    </div>
  );
}

export default App;
