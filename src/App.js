
import './App.css';
import {TodoProvider} from "./context/TodoProvider";
import {TodosPage} from "./pages/TodosPage";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="App">
        <TodoProvider>
            <TodosPage/>
            <Todo/>
        </TodoProvider>
    </div>
  );
}

export default App;
