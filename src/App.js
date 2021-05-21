import "./App.css";
import AddItemToList from "./componentes/AddItemToList/AddItemToList";
import DoingList from "./componentes/DoingList/DoingList";
import DoneList from "./componentes/DoneList/DoneList";
import Header from "./componentes/Header/Header";
import ToDoList from "./componentes/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <AddItemToList />
        <div className="App-columns">
          <ToDoList />
          <DoingList />
          <DoneList />
        </div>
      </main>
    </div>
  );
}

export default App;
