import "./App.css";
import { Header } from "./components/Layout/Header";
import { Todo } from "./components/TodoList/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <Todo />
      </div>
    </div>
  );
}

export default App;
