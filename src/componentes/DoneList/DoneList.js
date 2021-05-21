import { useRecoilValue } from "recoil";
import { doneFilter } from "../../Recoil/doneFilter";
import Item from "../Item/Item";

const DoneList = () => {
  const list = useRecoilValue(doneFilter);

  return (
    <div>
      <h3>Done</h3>
      <div>
        {list &&
          list.map((item, index) => (
            <Item value={item.value} id={index} key={index} />
          ))}
      </div>
    </div>
  );
};

export default DoneList;
