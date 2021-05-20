import { useRecoilValue } from "recoil";
import "./App.css";
import AddItemToList from "./componentes/AddItemToList/AddItemToList";
import Header from "./componentes/Header/Header";
import Item from "./componentes/Item/Item";
import { todoListState } from "./Recoil/todoListState";

function App() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <AddItemToList />
        {todoList &&
          todoList.map((item, index) => <Item value={item} id={index} />)}
      </main>
    </div>
  );
}

export default App;
