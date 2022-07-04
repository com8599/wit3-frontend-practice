import React, {
  useReducer,
  createContext,
  useContext,
  useRef,
  useEffect,
} from "react";

const initialTodos = [
  {
    id: 1,
    text: "React 만들기",
    done: true,
  },
  {
    id: 2,
    text: "WIT 하기",
    done: true,
  },
  {
    id: 3,
    text: "contextAPI 사용하기",
    done: false,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
  },
];

//reducer함수
const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE": //새로 생성
      return state.concat(action.todo);
    case "TOGGLE": // 버튼 클릭했을때
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE": // 삭제
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(
    todoReducer,
    [],
    () => {
      const localData = localStorage.getItem("initialTodos");
      return localData ? JSON.parse(localData) : [];
    },
    initialTodos
  );
  useEffect(() => {
    localStorage.setItem("initialTodos", JSON.stringify(initialTodos));
  }, [todoReducer, initialTodos]);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);

  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
