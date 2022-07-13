import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

// npm i gh-pages

// useParams 함수를 사용하면 React Router는 변수의 값을 넘겨준다.

// router는 다이나믹 url을 지원해 준다.
// 다이나믹 : url에 변수를 넣을 수 있다는 의미

// 한 라우트에서 다른 라우트로 이동하는 방법
// a link를 통해서도 할 수 있지만, 이 경우 화면 전체가 재실행된다.
// 재실행되는 것을 막기위해 Link component를 사용한다.

// npm i react-router-dom@5.3.0 설치
// Router
// Router를 먼저 렌더링해주고, url에 따라서 보여준다.
// router에는 2가지가 있는데 하나는 Hash Router이고
// 다른 하나가 Browser Router이다.
// Switch는 Route를 찾는건데 Route는 URL을 의미한다.(한번에 하나의 Route만 렌더링해주기 위함)
// Route를 찾으면 컴포넌트를 렌더링한다.
// Router 2개의 차이는 URL에 있다.
// BrowserRouter에서 URL은 그냥 보통이랑 같다.
// HashRouter는 #을 붙인다.

// fetch를 이용해서 영화 데이터 불러오기
// useEffect(() => {
//   fetch(
//     `https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       setMovies(json.data.movies);
//       setLoading(false);
//     });
// }, []);

// 간단한 ToDoList
// function App() {
//   const [toDos, setToDos] = useState([]);
//   const [toDo, setToDo] = useState("");
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       return;
//     } else {
//       setToDos((currentArray) => [...currentArray, toDo]);
//       setToDo("");
//     }
//   };
//   console.log(toDos);
//   return (
//     <div>
//       <h1>내가 할 일들 {toDos.length}개</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="할 일을 적어주세요 "
//         />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// coin Tracker
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   useEffect(() => {
//     fetch("http://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>The Coins! {loading ? "" : `${coins.length}`}</h1>
//       <input placeholder="얼마 만큼의 돈을 가지고 있나요?"></input>
//       <hr />
//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (
//         <select>
//           {coins.map((coin, index) => (
//             <option key={index}>
//               {coin.name} ${coin.quotes.USD.price}USD
//             </option>
//           ))}
//         </select>
//       )}
//     </div>
//   );
// }
