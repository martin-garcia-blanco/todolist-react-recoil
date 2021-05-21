import { useRecoilValue } from "recoil";
import { toDoFilter } from "../../Recoil/toDoFilter";
import Item from "../Item/Item";

const ToDoList = () => {
  const list = useRecoilValue(toDoFilter);

  return (
    <div>
      <h3>To do</h3>
      <div>
        {list &&
          list.map((item, index) => (
            <Item value={item.value} id={index} key={index} />
          ))}
      </div>
    </div>
  );
};

export default ToDoList;
