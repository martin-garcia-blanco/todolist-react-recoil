import "./item.css";
import { todoListState } from "../../Recoil/todoListState";
import { useRecoilState } from "recoil";

const Item = ({ value, id }) => {
  const [list, setList] = useRecoilState(todoListState);

  const handleRemoveItem = () => {
    const newList = list.filter((item, index) => id !== index);
    setList(newList);
  };

  return (
    <div className="item">
      <p>{value}</p>
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  );
};

export default Item;
