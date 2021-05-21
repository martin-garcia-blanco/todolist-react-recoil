import { useRecoilValue } from "recoil";
import { doingFilter } from "../../Recoil/doingFilter";
import Item from "../Item/Item";

const DoingList = () => {
  const list = useRecoilValue(doingFilter);

  return (
    <div>
      <h3>Doing</h3>
      <div>
        {list &&
          list.map((item, index) => (
            <Item value={item.value} id={index} key={index} />
          ))}
      </div>
    </div>
  );
};

export default DoingList;
