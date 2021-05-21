import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../Recoil/todoListState";

const AddItemToList = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useRecoilState(todoListState);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addItemToList = (e) => {
    e.preventDefault();
    setItems([...items, { value: inputText, state: "TODO" }]);
    setInputText("");
  };

  return (
    <form onSubmit={addItemToList}>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button>Add</button>
    </form>
  );
};

export default AddItemToList;
